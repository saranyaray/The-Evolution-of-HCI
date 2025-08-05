import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Smartphone, 
  Headphones, 
  Eye, 
  Hand,
  Mic,
  Brain,
  Zap
} from 'lucide-react';

interface Interface {
  id: string;
  name: string;
  icon: any;
  description: string;
  advantages: string[];
  examples: string[];
  color: string;
}

const interfaces: Interface[] = [
  {
    id: 'cli',
    name: 'Command Line',
    icon: Monitor,
    description: 'Text-based interaction through typed commands',
    advantages: ['Precise control', 'Efficient for experts', 'Scriptable', 'Low resource usage'],
    examples: ['Unix terminals', 'DOS commands', 'PowerShell', 'Bash'],
    color: 'tech-cyan'
  },
  {
    id: 'gui',
    name: 'Graphical Interface',
    icon: Hand,
    description: 'Visual elements manipulated with mouse and keyboard',
    advantages: ['Intuitive navigation', 'Visual feedback', 'Discoverable features', 'Multitasking'],
    examples: ['Windows desktop', 'macOS Finder', 'Web browsers', 'Mobile apps'],
    color: 'tech-blue'
  },
  {
    id: 'touch',
    name: 'Touch Interface',
    icon: Smartphone,
    description: 'Direct manipulation through finger gestures',
    advantages: ['Natural interaction', 'Portable devices', 'Gesture support', 'Accessibility'],
    examples: ['Smartphones', 'Tablets', 'Kiosks', 'Smart displays'],
    color: 'primary'
  },
  {
    id: 'voice',
    name: 'Voice Interface',
    icon: Mic,
    description: 'Spoken commands and natural language interaction',
    advantages: ['Hands-free operation', 'Natural communication', 'Accessibility', 'Multitasking'],
    examples: ['Siri', 'Alexa', 'Google Assistant', 'Voice search'],
    color: 'tech-purple'
  },
  {
    id: 'ar-vr',
    name: 'Immersive Reality',
    icon: Eye,
    description: 'Spatial computing in augmented and virtual environments',
    advantages: ['3D interaction', 'Spatial awareness', 'Immersive experience', 'Context-aware'],
    examples: ['VR headsets', 'AR glasses', 'Mixed reality', 'Holographic displays'],
    color: 'era-future'
  },
  {
    id: 'bci',
    name: 'Brain-Computer',
    icon: Brain,
    description: 'Direct neural interface bypassing traditional input methods',
    advantages: ['Thought-based control', 'Paralysis assistance', 'High bandwidth', 'Direct access'],
    examples: ['Neuralink', 'Research interfaces', 'Medical devices', 'Prosthetics'],
    color: 'era-modern'
  }
];

const InteractiveDemo = () => {
  const [selectedInterface, setSelectedInterface] = useState(interfaces[0]);
  const [hoveredInterface, setHoveredInterface] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interface <span className="text-gradient">Types</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different ways humans interact with computers across the decades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interface Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              Interface Types
            </h3>
            <div className="space-y-3">
              {interfaces.map((interface_item) => {
                const Icon = interface_item.icon;
                const isSelected = selectedInterface.id === interface_item.id;
                const isHovered = hoveredInterface === interface_item.id;

                return (
                  <Button
                    key={interface_item.id}
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full justify-start gap-3 h-auto py-3 px-4 smooth-transition ${
                      isSelected ? 'bg-primary hover:bg-primary-glow' : 'hover:bg-primary/10'
                    } ${isHovered ? 'scale-105' : ''}`}
                    onClick={() => setSelectedInterface(interface_item)}
                    onMouseEnter={() => setHoveredInterface(interface_item.id)}
                    onMouseLeave={() => setHoveredInterface(null)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{interface_item.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Interface Details */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden glow-effect">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-tech-blue/10">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <selectedInterface.icon className="w-8 h-8 text-primary" />
                  {selectedInterface.name} Interface
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  {selectedInterface.description}
                </p>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Advantages */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gradient">
                      Key Advantages
                    </h4>
                    <ul className="space-y-3">
                      {selectedInterface.advantages.map((advantage, index) => (
                        <li 
                          key={index} 
                          className="flex items-center gap-3 animate-fade-in-up"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gradient">
                      Real-world Examples
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedInterface.examples.map((example, index) => (
                        <Badge 
                          key={index} 
                          variant="outline"
                          className="animate-fade-in-up border-primary/30 hover:bg-primary/10 smooth-transition"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Element */}
                <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-tech-blue/5 rounded-lg border border-primary/20">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    Try it out:
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Click on different interface types above to explore their unique characteristics 
                    and see how human-computer interaction has evolved over time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;