import React from "react";
import FlyerHero from "../components/flyers/FlyerHero";
import FlyerFeatures from "../components/flyers/FlyerFeatures";
import FlyerShowcase from "../components/flyers/FlyerShowcase";
import ContactCTA from "../components/flyers/ContactCTA";

function FlyersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content with Smooth Scrolling */}
      <main className="relative overflow-hidden">
        <FlyerHero />
        
        {/* Gradient Transition */}
        <div className="h-8 bg-gradient-to-b from-white to-gray-50" />
        
        <FlyerFeatures />
        
        {/* Section Spacer */}
        <div className="h-16 bg-gradient-to-b from-gray-50 to-white" />
        
        <FlyerShowcase />
        
        {/* Final CTA Section */}
        <section className="relative">
          <ContactCTA />
        </section>
      </main>
      
      {/* Subtle Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}

export default FlyersPage;