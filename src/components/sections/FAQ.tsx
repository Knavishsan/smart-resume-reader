
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI uses advanced machine learning models trained on thousands of successful resumes and hiring patterns. It achieves 98% accuracy in identifying improvement areas and has helped over 50,000 professionals land their dream jobs."
    },
    {
      question: "Is my resume data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and never store your resume data permanently. Your information is processed in real-time and deleted immediately after analysis. We're GDPR compliant and follow strict privacy protocols."
    },
    {
      question: "What file formats are supported?",
      answer: "We support all major resume formats including PDF, DOC, DOCX, and TXT files. Our AI can parse complex layouts and extract information from various resume templates and designs."
    },
    {
      question: "How long does the analysis take?",
      answer: "Most analyses complete in under 30 seconds. Our AI processes your resume in real-time and provides comprehensive feedback almost instantly."
    },
    {
      question: "Can I analyze multiple versions of my resume?",
      answer: "Yes! With our Pro plan, you can analyze unlimited versions of your resume. This helps you A/B test different approaches and track improvements over time."
    },
    {
      question: "Do you provide industry-specific feedback?",
      answer: "Yes, our AI is trained on industry-specific patterns and can provide tailored feedback for tech, healthcare, finance, marketing, and many other sectors."
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about our AI resume analyzer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl mb-4 overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
