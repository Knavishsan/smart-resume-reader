
import React, { useState } from 'react';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { Stats } from '@/components/sections/Stats';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { ResumeAnalyzer } from '@/components/ResumeAnalyzer';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  if (showAnalyzer) {
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        <Navigation onBack={() => setShowAnalyzer(false)} showBack />
        <div className="pt-20">
          <ResumeAnalyzer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Animated starfield background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <Navigation onAnalyzeClick={() => setShowAnalyzer(true)} />
      
      <div className="relative z-10">
        <Hero onAnalyzeClick={() => setShowAnalyzer(true)} />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Pricing onAnalyzeClick={() => setShowAnalyzer(true)} />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
