
import React from 'react';
import { ResumeAnalyzer } from '@/components/ResumeAnalyzer';
import { Sparkles, Brain, Target } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            AI Resume Analyzer
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your career with intelligent resume analysis. Get personalized insights, 
            skill recommendations, and professional feedback powered by advanced AI technology.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
              <Sparkles className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-700 font-medium">AI-Powered Analysis</span>
            </div>
            <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
              <Target className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-gray-700 font-medium">Personalized Feedback</span>
            </div>
          </div>
        </div>
        
        <ResumeAnalyzer />
      </div>
    </div>
  );
};

export default Index;
