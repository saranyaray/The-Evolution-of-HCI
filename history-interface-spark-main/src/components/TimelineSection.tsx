import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Smartphone, Cpu, Brain, Terminal, Mouse } from 'lucide-react';

import era1940s from '@/assets/era-1940s.jpg';
import era1970s from '@/assets/era-1970s.jpg';
import era1980s from '@/assets/era-1980s.jpg';
import era2000s from '@/assets/era-2000s.jpg';
import era2020s from '@/assets/era-2020s.jpg';

interface Era {
  year: string;
  title: string;
  description: string;
  details: string[];
  icon: any;
  image: string;
  color: string;
}

const eras: Era[] = [
  {
    year: '1940s-1950s',
    title: 'Punch Card Era',
    description: 'The dawn of human-computer interaction through physical cards and batch processing.',
    details: [
      'Punch cards for data input',
      'Batch processing systems',
      'No real-time interaction',
      'Operators as intermediaries'
    ],
    icon: Terminal,
    image: era1940s,
    color: 'era-vintage'
  },
  {
    year: '1960s-1970s',
    title: 'Command Line Interface',
    description: 'Text-based terminals revolutionized direct computer communication.',
    details: [
      'Direct text input/output',
      'Real-time interaction',
      'Terminal-based computing',
      'Programming languages emerge'
    ],
    icon: Terminal,
    image: era1970s,
    color: 'era-retro'
  },
  {
    year: '1980s-1990s',
    title: 'Graphical User Interface',
    description: 'Windows, icons, and mouse interactions made computing accessible to everyone.',
    details: [
      'Point-and-click interfaces',
      'Visual metaphors (desktop)',
      'Mouse as primary input',
      'Personal computers mainstream'
    ],
    icon: Mouse,
    image: era1980s,
    color: 'era-modern'
  },
  {
    year: '2000s-2010s',
    title: 'Touch & Mobile Era',
    description: 'Multi-touch interfaces and mobile devices transformed how we interact with technology.',
    details: [
      'Touch-based interactions',
      'Gesture recognition',
      'Mobile-first design',
      'App ecosystems'
    ],
    icon: Smartphone,
    image: era2000s,
    color: 'tech-blue'
  },
  {
    year: '2020s-Future',
    title: 'AI & Immersive Interfaces',
    description: 'Voice assistants, AR/VR, and brain-computer interfaces shape the future.',
    details: [
      'Voice & conversational UI',
      'Augmented/Virtual Reality',
      'Brain-computer interfaces',
      'AI-powered interactions'
    ],
    icon: Brain,
    image: era2020s,
    color: 'era-future'
  }
];

const TimelineSection = () => {
  const [activeEra, setActiveEra] = useState(0);
  const [visibleEras, setVisibleEras] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleEras(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const eraElements = document.querySelectorAll('.era-card');
    eraElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Timeline</span> of Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the major milestones that shaped how humans interact with computers
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-tech-blue to-tech-purple rounded-full opacity-30"></div>

          {/* Era Cards */}
          <div className="space-y-20">
            {eras.map((era, index) => {
              const Icon = era.icon;
              const isLeft = index % 2 === 0;
              const isVisible = visibleEras.includes(index);

              return (
                <div
                  key={index}
                  className={`era-card flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                  data-index={index}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <Card 
                      className={`overflow-hidden smooth-transition hover:scale-105 cursor-pointer glow-effect ${
                        activeEra === index ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setActiveEra(index)}
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/2 p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="bg-primary/20 p-2 rounded-lg">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <Badge variant="outline" className="text-sm">
                                {era.year}
                              </Badge>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-3 text-gradient">
                              {era.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {era.description}
                            </p>
                            
                            <ul className="space-y-2">
                              {era.details.map((detail, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="md:w-1/2">
                            <img
                              src={era.image}
                              alt={era.title}
                              className="w-full h-64 md:h-full object-cover"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full border-4 border-background z-10 pulse-glow">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;