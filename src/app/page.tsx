'use client';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IntroSection from './_components/IntroSection';
import ServicesSection from './_components/ServicesSection';
import MvpSection from './_components/MvpSection';
import ProcessSection from './_components/ProcessSection';
import ContactSection from './_components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-dark flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />     
        
        <IntroSection />
        
        <ServicesSection />
        
        <MvpSection />
        
        <ProcessSection />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
