import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Terminal, 
  Mouse, 
  Smartphone, 
  Brain, 
  Clock,
  Users,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

interface QuickFact {
  icon: any;
  title: string;
  description: string;
  color: string;
}

const quickFacts: QuickFact[] = [
  {
    icon: Clock,
    title: '80+ Years of Evolution',
    description: 'From 1940s punch cards to modern brain-computer interfaces',
    color: 'tech-cyan'
  },
  {
    icon: Users,
    title: 'Billions of Users',
    description: 'HCI developments now impact over 5 billion people globally',
    color: 'primary'
  },
  {
    icon: TrendingUp,
    title: '5 Major Paradigm Shifts',
    description: 'Punch cards → CLI → GUI → Touch → Voice/AI interfaces',
    color: 'tech-blue'
  },
  {
    icon: Lightbulb,
    title: 'Future Innovations',
    description: 'AR/VR, brain interfaces, and quantum computing on the horizon',
    color: 'tech-purple'
  }
];

const milestones = [
  { year: '1940s', event: 'Punch card systems introduced', impact: 'First programmable input method' },
  { year: '1960s', event: 'Command line interfaces emerge', impact: 'Real-time computer interaction begins' },
  { year: '1970s', event: 'First GUI prototypes', impact: 'Visual computing concepts developed' },
  { year: '1980s', event: 'Personal computers mainstream', impact: 'Computing becomes accessible to general public' },
  { year: '1990s', event: 'World Wide Web launches', impact: 'Global information sharing revolutionized' },
  { year: '2000s', event: 'Touch interfaces breakthrough', impact: 'Mobile computing transforms daily life' },
  { year: '2010s', event: 'Voice assistants arrive', impact: 'Natural language processing advances' },
  { year: '2020s', event: 'AI and immersive reality', impact: 'Intelligent and spatial computing emerges' }
];

interface QuickOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickOverviewModal = ({ isOpen, onClose }: QuickOverviewModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl text-gradient flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-primary" />
            Quick Overview: HCI Evolution
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Quick Facts Grid */}
          <div>
            <h3 className="text-xl font-bold mb-4">Key Facts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <Card key={index} className="hover:glow-effect smooth-transition">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/20 p-2 rounded-lg">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{fact.title}</h4>
                          <p className="text-sm text-muted-foreground">{fact.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline Summary */}
          <div>
            <h3 className="text-xl font-bold mb-4">Major Milestones</h3>
            <div className="space-y-3">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/20 smooth-transition">
                  <Badge variant="outline" className="shrink-0 font-mono text-xs">
                    {milestone.year}
                  </Badge>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{milestone.event}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interface Evolution Summary */}
          <div>
            <h3 className="text-xl font-bold mb-4">Interface Evolution</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg border border-border/50">
                <Terminal className="w-8 h-8 mx-auto mb-2 text-tech-cyan" />
                <h4 className="font-medium text-sm">Command Line</h4>
                <p className="text-xs text-muted-foreground mt-1">Text-based control</p>
              </div>
              <div className="text-center p-4 rounded-lg border border-border/50">
                <Mouse className="w-8 h-8 mx-auto mb-2 text-tech-blue" />
                <h4 className="font-medium text-sm">GUI</h4>
                <p className="text-xs text-muted-foreground mt-1">Visual interfaces</p>
              </div>
              <div className="text-center p-4 rounded-lg border border-border/50">
                <Smartphone className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h4 className="font-medium text-sm">Touch</h4>
                <p className="text-xs text-muted-foreground mt-1">Direct manipulation</p>
              </div>
              <div className="text-center p-4 rounded-lg border border-border/50">
                <Brain className="w-8 h-8 mx-auto mb-2 text-tech-purple" />
                <h4 className="font-medium text-sm">Neural</h4>
                <p className="text-xs text-muted-foreground mt-1">Thought-based control</p>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-primary/10 to-tech-blue/10 p-6 rounded-lg border border-primary/20">
            <h3 className="text-lg font-bold mb-3 text-gradient">The Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Human-Computer Interaction has transformed from requiring specialized technical knowledge 
              to becoming as natural as conversation. This evolution has democratized computing, 
              making technology accessible to billions and enabling innovations that seemed impossible 
              just decades ago. The future promises even more intuitive and powerful ways to interact 
              with digital systems, potentially making the boundary between human and computer 
              intelligence increasingly seamless.
            </p>
          </div>

          {/* Navigation Suggestion */}
          <div className="text-center p-4 bg-secondary/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              🚀 Ready to dive deeper? Explore the full timeline, try interactive demos, 
              and discover future technologies by scrolling down or closing this overview.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickOverviewModal;