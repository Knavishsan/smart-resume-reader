
import React, { useState, useEffect } from 'react';
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
import { SignIn } from '@/components/SignIn';
import { AdminDashboard } from '@/components/AdminDashboard';
import { Documentation } from '@/components/Documentation';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'signin' | 'analyzer' | 'admin' | 'docs'>('home');
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAnalyzeClick = () => {
    if (currentUser) {
      if (currentUser.isAdmin) {
        setCurrentView('admin');
      } else {
        setCurrentView('analyzer');
      }
    } else {
      setCurrentView('signin');
    }
  };

  const handleSignIn = (user: any) => {
    setCurrentUser(user);
    if (user.isAdmin) {
      setCurrentView('admin');
    } else {
      setCurrentView('analyzer');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setCurrentView('home');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleDocsClick = () => {
    setCurrentView('docs');
  };

  if (currentView === 'signin') {
    return <SignIn onSignIn={handleSignIn} onBack={handleBackToHome} />;
  }

  if (currentView === 'analyzer') {
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        <Navigation 
          onBack={handleBackToHome} 
          showBack 
          currentUser={currentUser}
          onSignOut={handleSignOut}
          onDocsClick={handleDocsClick}
        />
        <div className="pt-20">
          <ResumeAnalyzer />
        </div>
      </div>
    );
  }

  if (currentView === 'admin') {
    return <AdminDashboard onBack={handleBackToHome} />;
  }

  if (currentView === 'docs') {
    return <Documentation onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Animated starfield background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <Navigation 
        onAnalyzeClick={handleAnalyzeClick} 
        currentUser={currentUser} 
        onSignOut={handleSignOut}
        onDocsClick={handleDocsClick}
      />
      
      <div className="relative z-10">
        <Hero onAnalyzeClick={handleAnalyzeClick} />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Pricing onAnalyzeClick={handleAnalyzeClick} />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
