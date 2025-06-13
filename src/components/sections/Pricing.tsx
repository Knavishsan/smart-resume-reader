
import React from 'react';
import { Check, Sparkles } from 'lucide-react';

interface PricingProps {
  onAnalyzeClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onAnalyzeClick }) => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "1 resume analysis",
        "Basic feedback",
        "ATS compatibility check",
        "Email support"
      ],
      popular: false,
      buttonText: "Start Free"
    },
    {
      name: "Pro",
      price: "$19",
      period: "month",
      description: "For serious job seekers",
      features: [
        "Unlimited analyses",
        "Advanced AI insights",
        "Industry-specific feedback",
        "Cover letter optimization",
        "Priority support",
        "Progress tracking"
      ],
      popular: true,
      buttonText: "Go Pro"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team dashboard",
        "Bulk analysis",
        "Custom branding",
        "API access",
        "Dedicated support"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start free and upgrade as your career grows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                  : 'border-gray-800 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-white" />
                    <span className="text-white text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={plan.name === "Free" ? onAnalyzeClick : undefined}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
