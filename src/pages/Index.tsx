
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DateConverter from '@/components/DateConverter';
import Timeline from '@/components/Timeline';
import AboutSection from '@/components/AboutSection';
import ThisDaySection from '@/components/ThisDaySection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
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
      <Header />
      <HeroSection />
      <DateConverter />
      <Timeline />
      <AboutSection />
      <ThisDaySection />
      <Footer />
    </div>
  );
};

export default Index;
