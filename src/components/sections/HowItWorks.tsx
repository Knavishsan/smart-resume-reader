
import React from 'react';
import { Upload, Cpu, Sparkles, Download } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Resume",
      description: "Simply drag and drop your resume or click to upload",
      color: "blue"
    },
    {
      icon: Cpu,
      title: "AI Analysis",
      description: "Our advanced AI processes and analyzes your content",
      color: "purple"
    },
    {
      icon: Sparkles,
      title: "Get Insights",
      description: "Receive detailed feedback and improvement suggestions",
      color: "pink"
    },
    {
      icon: Download,
      title: "Apply Changes",
      description: "Implement recommendations and boost your job prospects",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-pink-500",
      pink: "from-pink-500 to-rose-500",
      green: "from-green-500 to-emerald-500"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your resume in four simple steps with our intelligent AI system
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-green-500 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-r ${getColorClasses(step.color)} p-6 rounded-3xl w-24 h-24 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold border-2 border-gray-700">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
