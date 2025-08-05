import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  Eye, 
  Waves, 
  Sparkles,
  ArrowRight,
  Lightbulb
} from 'lucide-react';

interface FutureTech {
  id: string;
  title: string;
  description: string;
  timeline: string;
  impact: string;
  icon: any;
  probability: number;
  challenges: string[];
}

const futureTechnologies: FutureTech[] = [
  {
    id: 'bci',
    title: 'Brain-Computer Interfaces',
    description: 'Direct neural pathways for computer communication, bypassing traditional input methods entirely.',
    timeline: '2025-2035',
    impact: 'Revolutionary for accessibility and human augmentation',
    icon: Brain,
    probability: 85,
    challenges: ['Ethical concerns', 'Safety standards', 'Privacy protection', 'Neural compatibility']
  },
  {
    id: 'holographic',
    title: 'Holographic Displays',
    description: 'Three-dimensional light-based interfaces that exist in physical space without headsets.',
    timeline: '2030-2040',
    impact: 'Transform spatial computing and collaboration',
    icon: Sparkles,
    probability: 70,
    challenges: ['Power consumption', 'Display resolution', 'Cost barriers', 'Content creation']
  },
  {
    id: 'quantum',
    title: 'Quantum-Enhanced UI',
    description: 'Interfaces that leverage quantum computing for instantaneous, complex interactions.',
    timeline: '2035-2050',
    impact: 'Enable computational possibilities beyond current limits',
    icon: Zap,
    probability: 60,
    challenges: ['Quantum stability', 'Temperature requirements', 'Error correction', 'Accessibility']
  },
  {
    id: 'emotion',
    title: 'Emotion-Aware Systems',
    description: 'Computers that read and respond to human emotions through multiple biometric sensors.',
    timeline: '2025-2030',
    impact: 'Personalized and empathetic user experiences',
    icon: Eye,
    probability: 90,
    challenges: ['Privacy concerns', 'Cultural sensitivity', 'Data security', 'Consent frameworks']
  },
  {
    id: 'telepathic',
    title: 'Telepathic Computing',
    description: 'Mind-to-mind communication facilitated by computer interfaces and neural networks.',
    timeline: '2040-2060',
    impact: 'Fundamentally change human communication',
    icon: Waves,
    probability: 40,
    challenges: ['Ethical implications', 'Mental privacy', 'Technological complexity', 'Social adaptation']
  }
];

const FutureSection = () => {
  const [selectedTech, setSelectedTech] = useState(futureTechnologies[0]);
  const [animatedCards, setAnimatedCards] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedCards(prev => {
        const remaining = futureTechnologies.filter(tech => !prev.includes(tech.id));
        if (remaining.length > 0) {
          return [...prev, remaining[0].id];
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-glow px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            Future Predictions
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Future</span> of HCI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Emerging technologies that will revolutionize how we interact with computers in the coming decades
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {futureTechnologies.map((tech) => {
            const Icon = tech.icon;
            const isAnimated = animatedCards.includes(tech.id);
            const isSelected = selectedTech.id === tech.id;

            return (
              <Card
                key={tech.id}
                className={`cursor-pointer smooth-transition hover:scale-105 overflow-hidden ${
                  isSelected ? 'ring-2 ring-primary glow-effect' : 'hover:glow-effect'
                } ${isAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
                onClick={() => setSelectedTech(tech)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${tech.probability >= 80 ? 'border-primary text-primary' : 
                        tech.probability >= 60 ? 'border-tech-blue text-tech-blue' : 
                        'border-tech-purple text-tech-purple'}`}
                    >
                      {tech.probability}% likely
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg">{tech.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tech.timeline}</p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm mb-3">{tech.description}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Zap className="w-3 h-3" />
                    {tech.impact}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected Technology Details */}
        <Card className="overflow-hidden glow-effect">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-tech-purple/10">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <selectedTech.icon className="w-8 h-8 text-primary" />
                {selectedTech.title}
              </CardTitle>
              <Badge className="bg-primary/20 text-primary-glow">
                {selectedTech.timeline}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gradient">
                  Technology Overview
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedTech.description}
                </p>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Potential Impact
                  </h5>
                  <p className="text-sm">{selectedTech.impact}</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-gradient">
                  Key Challenges
                </h4>
                <ul className="space-y-3">
                  {selectedTech.challenges.map((challenge, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                      <span className="text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>

                {/* Probability Indicator */}
                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <h5 className="font-semibold mb-3">Implementation Probability</h5>
                  <div className="w-full bg-secondary/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full smooth-transition"
                      style={{ width: `${selectedTech.probability}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {selectedTech.probability}% likelihood based on current technological trends
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FutureSection;