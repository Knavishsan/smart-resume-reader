
import React from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

export const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Happy Users",
      description: "Professionals trust our AI"
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      description: "Users land interviews"
    },
    {
      icon: Clock,
      value: "30 sec",
      label: "Analysis Time",
      description: "Lightning-fast results"
    },
    {
      icon: Globe,
      value: "100+",
      label: "Countries",
      description: "Global reach and impact"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with our AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-gray-300 mb-2">
                {stat.label}
              </div>
              
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
