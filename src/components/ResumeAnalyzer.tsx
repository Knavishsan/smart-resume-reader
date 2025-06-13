
import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { AnalysisResults } from './AnalysisResults';
import { ApiKeyInput } from './ApiKeyInput';
import { analyzeResume } from '@/lib/geminiService';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

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
  const [apiKey, setApiKey] = useState<string>('');
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

    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key to analyze the resume.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const result = await analyzeResume(resumeText, apiKey);
      setAnalysis(result);
      toast({
        title: "Analysis Complete",
        description: "Your resume has been analyzed successfully!",
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze resume. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <ApiKeyInput apiKey={apiKey} onApiKeyChange={setApiKey} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <FileUpload onFileUpload={handleFileUpload} />
          
          {resumeText && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Resume Content Preview</h3>
              <div className="bg-gray-50 rounded-md p-4 max-h-64 overflow-y-auto">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                  {resumeText.substring(0, 500)}
                  {resumeText.length > 500 && '...'}
                </pre>
              </div>
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Analyzing Resume...
                  </>
                ) : (
                  'Analyze Resume'
                )}
              </button>
            </div>
          )}
        </div>

        <div>
          {analysis && <AnalysisResults analysis={analysis} />}
        </div>
      </div>
    </div>
  );
};
