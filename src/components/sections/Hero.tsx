
import React from 'react';
import { Sparkles, Rocket, Stars } from 'lucide-react';

interface HeroProps {
  onAnalyzeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAnalyzeClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Floating planets */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="planet planet-3"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Powered by Advanced AI</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Harness the power of AI to analyze, optimize, and elevate your resume. 
            Get personalized insights that land you your dream job in the digital universe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onAnalyzeClick}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl hover:shadow-blue-500/25"
            >
              <Rocket className="h-6 w-6 group-hover:animate-bounce" />
              <span>Analyze Your Resume</span>
              <Sparkles className="h-5 w-5" />
            </button>
            
            <button className="text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 flex items-center space-x-2">
              <Stars className="h-5 w-5" />
              <span>View Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-300">Resumes Analyzed</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
