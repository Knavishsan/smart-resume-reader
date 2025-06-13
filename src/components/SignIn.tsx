
import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SignInProps {
  onSignIn: (user: any) => void;
  onBack: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ onSignIn, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Admin credentials
  const ADMIN_EMAIL = "admin@resumeai.com";
  const ADMIN_PASSWORD = "admin123";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Admin login
      const adminUser = {
        id: 'admin',
        email: ADMIN_EMAIL,
        name: 'Admin',
        isAdmin: true
      };
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      onSignIn(adminUser);
      toast({
        title: "Welcome Admin!",
        description: "Redirecting to admin dashboard...",
      });
    } else if (email && password) {
      // Regular user login (simulate user creation)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      let user = users.find((u: any) => u.email === email);
      
      if (!user) {
        // Create new user
        user = {
          id: Date.now().toString(),
          email,
          name: email.split('@')[0],
          isAdmin: false,
          joinedAt: new Date().toISOString(),
          lastActive: new Date().toISOString(),
          resumesAnalyzed: 0
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      } else {
        // Update last active
        user.lastActive = new Date().toISOString();
        localStorage.setItem('users', JSON.stringify(users));
      }
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      onSignIn(user);
      toast({
        title: "Welcome back!",
        description: "Redirecting to resume analyzer...",
      });
    } else {
      toast({
        title: "Invalid credentials",
        description: "Please check your email and password.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative flex items-center justify-center">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl w-fit mx-auto mb-6">
              <User className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h1>
            <p className="text-gray-400">Sign in to analyze your resume with AI</p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Sparkles className="animate-spin mr-3 h-5 w-5" />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Demo Credentials:</h4>
            <div className="text-xs text-gray-400 space-y-1">
              <p><strong>Admin:</strong> admin@resumeai.com / admin123</p>
              <p><strong>User:</strong> Any email and password</p>
            </div>
          </div>

          <button
            onClick={onBack}
            className="w-full mt-6 text-gray-400 hover:text-white transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
