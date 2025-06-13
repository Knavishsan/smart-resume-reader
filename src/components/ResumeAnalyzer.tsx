
import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { AnalysisResults } from './AnalysisResults';
import { analyzeResume } from '@/lib/geminiService';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, ArrowLeft } from 'lucide-react';

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
      const result = await analyzeResume(resumeText, "");
      setAnalysis(result);
      
      // Update user's resume count
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      if (currentUser.id && !currentUser.isAdmin) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const updatedUsers = users.map((u: any) => 
          u.id === currentUser.id 
            ? { ...u, resumesAnalyzed: (u.resumesAnalyzed || 0) + 1, lastActive: new Date().toISOString() }
            : u
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        
        // Update current user in localStorage
        const updatedCurrentUser = { ...currentUser, resumesAnalyzed: (currentUser.resumesAnalyzed || 0) + 1 };
        localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUser));
      }
      
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

  const resetAnalysis = () => {
    setResumeText('');
    setAnalysis(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Resume Analyzer
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upload your resume and get instant AI-powered feedback to boost your career prospects
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {!analysis ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6 animate-fade-in">
                <FileUpload onFileUpload={handleFileUpload} />
                
                {resumeText && (
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 animate-scale-in">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl mr-4">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Resume Preview</h3>
                      </div>
                      <button
                        onClick={resetAnalysis}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-xl p-6 max-h-64 overflow-y-auto border border-gray-600">
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                        {resumeText.substring(0, 500)}
                        {resumeText.length > 500 && '...'}
                      </pre>
                    </div>
                    
                    <button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
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
                {!resumeText && (
                  <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700 p-12 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                      <Sparkles className="h-12 w-12 text-white animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Analyze</h3>
                    <p className="text-gray-300 text-lg">Upload your resume to get started with AI-powered insights</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white">Analysis Results</h2>
                <button
                  onClick={resetAnalysis}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Analyze Another</span>
                </button>
              </div>
              <AnalysisResults analysis={analysis} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
