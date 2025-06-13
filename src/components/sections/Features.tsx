
import React from 'react';
import { Brain, Target, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your resume with precision",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Targeted Optimization",
      description: "Get specific recommendations tailored to your industry and role",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Receive comprehensive feedback in seconds, not hours",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and never stored or shared",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Optimized for international job markets and ATS systems",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Track improvements and measure your progress over time",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stellar Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the powerful capabilities that make our AI resume analyzer 
            the most advanced tool in the galaxy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
