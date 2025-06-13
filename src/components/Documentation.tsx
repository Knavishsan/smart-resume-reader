
import React from 'react';
import { Book, ArrowLeft, FileText, Users, Zap, Shield, Target, CheckCircle } from 'lucide-react';

interface DocumentationProps {
  onBack: () => void;
}

export const Documentation: React.FC<DocumentationProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl mr-6">
                <Book className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Documentation
                  </span>
                </h1>
                <p className="text-xl text-gray-400">Learn how to use ResumeAI effectively</p>
              </div>
            </div>
            <button
              onClick={onBack}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Getting Started */}
          <section className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Zap className="h-6 w-6 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold">Getting Started</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Welcome to ResumeAI! Follow these simple steps to analyze your resume and get AI-powered insights:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Click on "Analyze Resume" from the homepage</li>
                <li>Sign in with your credentials (or create a new account)</li>
                <li>Upload your resume file (supports .txt, .pdf, .doc, .docx)</li>
                <li>Click "Analyze with AI" to get instant feedback</li>
                <li>Review your results and implement suggested improvements</li>
              </ol>
            </div>
          </section>

          {/* How to Sign In */}
          <section className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">User Authentication</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>ResumeAI requires users to sign in before analyzing resumes. Here's how:</p>
              <div className="bg-gray-800/50 rounded-xl p-6 space-y-3">
                <h4 className="font-semibold text-white">For Regular Users:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Enter any valid email address</li>
                  <li>Create a password of your choice</li>
                  <li>Your account will be created automatically</li>
                  <li>You'll be redirected to the resume analyzer</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 space-y-3">
                <h4 className="font-semibold text-white">Demo Credentials:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Admin Access:</strong> admin@resumeai.com / admin123</li>
                  <li><strong>Regular User:</strong> Any email and password combination</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resume Upload */}
          <section className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold">Resume Upload</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Our AI supports multiple file formats for maximum convenience:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Supported Formats:</h4>
                  <ul className="space-y-2">
                    {['.txt (Plain Text)', '.pdf (PDF Documents)', '.doc (Word Documents)', '.docx (Word Documents)'].map((format, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {format}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Upload Methods:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Drag & drop your file
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Click to browse files
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Instant file processing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      Real-time preview
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* AI Analysis */}
          <section className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Target className="h-6 w-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold">AI Analysis Features</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Our advanced AI provides comprehensive resume analysis including:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded mr-2">SCORE</span>
                      Overall Rating
                    </h4>
                    <p className="text-sm">Get an overall score out of 100 based on industry standards</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded mr-2">SKILLS</span>
                      Skills Analysis
                    </h4>
                    <p className="text-sm">Identify existing skills and suggest missing ones for your field</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded mr-2">EXPERIENCE</span>
                      Experience Review
                    </h4>
                    <p className="text-sm">Analyze your work experience and suggest improvements</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded mr-2">TIPS</span>
                      Actionable Suggestions
                    </h4>
                    <p className="text-sm">Get specific recommendations to improve your resume</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Security */}
          <section className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold">Privacy & Security</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Your privacy and data security are our top priorities:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Your resume is processed securely</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Data is stored locally on your device</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>No personal data is shared with third parties</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>AI analysis happens in real-time</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Files are not permanently stored</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>GDPR compliant processing</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-700 pb-4">
                <h4 className="font-semibold text-white mb-2">How accurate is the AI analysis?</h4>
                <p className="text-gray-300 text-sm">Our AI is trained on thousands of successful resumes and industry standards, providing highly accurate insights and suggestions.</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h4 className="font-semibold text-white mb-2">Can I analyze multiple resumes?</h4>
                <p className="text-gray-300 text-sm">Yes! You can analyze as many resumes as you want. Each analysis is independent and provides fresh insights.</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h4 className="font-semibold text-white mb-2">What if my file format isn't supported?</h4>
                <p className="text-gray-300 text-sm">Try converting your resume to a supported format (.txt, .pdf, .doc, .docx) or contact our support team for assistance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Is there a file size limit?</h4>
                <p className="text-gray-300 text-sm">We recommend keeping your resume under 10MB for optimal processing speed. Most standard resumes are well within this limit.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
