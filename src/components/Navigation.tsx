
import React, { useState } from 'react';
import { Brain, Menu, X, ArrowLeft, User, LogOut, Book } from 'lucide-react';

interface NavigationProps {
  onAnalyzeClick?: () => void;
  onBack?: () => void;
  showBack?: boolean;
  currentUser?: any;
  onSignOut?: () => void;
  onDocsClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  onAnalyzeClick, 
  onBack, 
  showBack, 
  currentUser, 
  onSignOut,
  onDocsClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBack ? (
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ResumeAI
                </span>
              </div>
            )}
          </div>

          {!showBack && (
            <>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
                <button 
                  onClick={onDocsClick}
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <Book className="h-4 w-4" />
                  <span>Docs</span>
                </button>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                {currentUser ? (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                      <User className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{currentUser.name}</span>
                      {currentUser.isAdmin && (
                        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">Admin</span>
                      )}
                    </div>
                    <button
                      onClick={onSignOut}
                      className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <button className="text-gray-300 hover:text-white transition-colors">
                    Sign In
                  </button>
                )}
                <button
                  onClick={onAnalyzeClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {currentUser?.isAdmin ? 'Dashboard' : 'Analyze Resume'}
                </button>
              </div>

              <button
                className="md:hidden text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </>
          )}

          {/* Mobile user info */}
          {showBack && currentUser && (
            <div className="md:hidden flex items-center space-x-2">
              <User className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-300">{currentUser.name}</span>
              {currentUser.isAdmin && (
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">Admin</span>
              )}
            </div>
          )}
        </div>

        {isMenuOpen && !showBack && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              <button 
                onClick={onDocsClick}
                className="text-gray-300 hover:text-white transition-colors text-left flex items-center space-x-1"
              >
                <Book className="h-4 w-4" />
                <span>Documentation</span>
              </button>
              
              {currentUser ? (
                <div className="space-y-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{currentUser.name}</span>
                    {currentUser.isAdmin && (
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">Admin</span>
                    )}
                  </div>
                  <button
                    onClick={onSignOut}
                    className="text-gray-300 hover:text-white transition-colors text-left flex items-center space-x-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <button className="text-gray-300 hover:text-white transition-colors text-left">
                  Sign In
                </button>
              )}
              
              <button
                onClick={onAnalyzeClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg w-full"
              >
                {currentUser?.isAdmin ? 'Dashboard' : 'Analyze Resume'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
