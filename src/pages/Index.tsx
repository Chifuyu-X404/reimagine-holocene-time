
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import AboutSection from '@/components/AboutSection';
import ThisDaySection from '@/components/ThisDaySection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Apply dark theme
    document.body.classList.add('dark');
    
    // Scroll animations observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 bg-[#0A0B12]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-top [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2),transparent)]"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent opacity-50 blur-2xl"></div>
      </div>
      <Header />
      <HeroSection />
      <Timeline />
      <AboutSection />
      <ThisDaySection />
      <Footer />
    </div>
  );
};

export default Index;
