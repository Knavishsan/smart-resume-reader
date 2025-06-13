
import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { AnalysisResults } from './AnalysisResults';
import { analyzeResume } from '@/lib/geminiService';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';

export interface AnalysisResult {
  overallScore: number;
  skillsAnalysis: {
    identifiedSkills: string[];
    missingSkills: string[];
    skillsScore: number;
  };
  experienceAnalysis: {
    yearsOfExperience: number;
    relevantExperience: string[];
    experienceScore: number;
  };
  suggestions: string[];
  strengths: string[];
  improvements: string[];
}

export const ResumeAnalyzer = () => {
  const [resumeText, setResumeText] = useState<string>('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (text: string) => {
    setResumeText(text);
    setAnalysis(null);
  };

  const handleAnalyze = async () => {
    if (!resumeText.trim()) {
      toast({
        title: "No Resume Content",
        description: "Please upload a resume first.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      // Using empty string as API key for now - replace with your actual key
      const result = await analyzeResume(resumeText, "");
      setAnalysis(result);
      toast({
        title: "Analysis Complete",
        description: "Your resume has been analyzed successfully!",
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6 animate-fade-in">
          <FileUpload onFileUpload={handleFileUpload} />
          
          {resumeText && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 animate-scale-in">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl mr-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Resume Preview</h3>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-6 max-h-64 overflow-y-auto border border-gray-200/50">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                  {resumeText.substring(0, 500)}
                  {resumeText.length > 500 && '...'}
                </pre>
              </div>
              
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="animate-spin mr-3 h-5 w-5" />
                    <span className="animate-pulse">Analyzing with AI...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-3 h-5 w-5" />
                    Analyze with AI
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {analysis && <AnalysisResults analysis={analysis} />}
          {!analysis && !resumeText && (
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-12 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-white animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Analyze</h3>
              <p className="text-gray-600 text-lg">Upload your resume to get started with AI-powered insights</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
