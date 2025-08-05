import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import InteractiveDemo from '@/components/InteractiveDemo';
import FutureSection from '@/components/FutureSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TimelineSection />
      <div id="interfaces">
        <InteractiveDemo />
      </div>
      <div id="future">
        <FutureSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
