import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap } from 'lucide-react';
import QuickOverviewModal from '@/components/QuickOverviewModal';
import heroImage from '@/assets/hci-hero.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTimeline = () => {
    const timelineElement = document.getElementById('timeline');
    timelineElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="HCI Evolution Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-animation absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60"></div>
        <div className="floating-animation absolute top-40 right-20 w-6 h-6 bg-tech-cyan rounded-full opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="floating-animation absolute bottom-32 left-1/4 w-3 h-3 bg-tech-purple rounded-full opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-glow px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/30">
            <Zap className="w-4 h-4" />
            Interactive Journey
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The <span className="text-gradient">Evolution</span> of<br />
          Human-Computer<br />
          <span className="text-gradient">Interaction</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover how we've transformed from punch cards to brain-computer interfaces 
          in this interactive journey through computing history.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="pulse-glow bg-primary hover:bg-primary-glow smooth-transition text-lg px-8 py-4"
            onClick={scrollToTimeline}
          >
            Begin Journey
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 smooth-transition text-lg px-8 py-4"
            onClick={() => setIsOverviewOpen(true)}
          >
            Quick Overview
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-glow" />
        </div>
      </div>

      {/* Quick Overview Modal */}
      <QuickOverviewModal 
        isOpen={isOverviewOpen} 
        onClose={() => setIsOverviewOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;