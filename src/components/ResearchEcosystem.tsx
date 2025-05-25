
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResearchEcosystem = () => {
  const institutions = [
    {
      name: "University of Peradeniya, Faculty of Agriculture",
      type: "Academia",
      description: "Leading agricultural research and biotechnology innovation in Sri Lanka",
      neonColor: "cyan"
    },
    {
      name: "Standard Seed Corporation, Delaware, Wilmington, USA",
      type: "Industry",
      description: "International agricultural biotechnology and seed development",
      neonColor: "green"
    },
    {
      name: "Institute of Scientific Informatics",
      type: "Education and Research",
      description: "Advanced computational biology and bioinformatics research",
      neonColor: "purple"
    },
    {
      name: "Global Chemistry USA",
      type: "Open Source",
      description: "Open-source chemical informatics and molecular modeling platforms",
      neonColor: "cyan"
    },
    {
      name: "Chemo-Informatics Academy, Nigeria",
      type: "Education and Research",
      description: "Chemical informatics education and drug discovery research",
      neonColor: "green"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Academia': return 'border-cyan-400/30 text-cyan-300';
      case 'Industry': return 'border-green-400/30 text-green-300';
      case 'Education and Research': return 'border-purple-400/30 text-purple-300';
      case 'Open Source': return 'border-yellow-400/30 text-yellow-300';
      default: return 'border-gray-400/30 text-gray-300';
    }
  };

  return (
    <section id="research-ecosystem" className="py-24 biotech-bg relative">
      {/* Background molecular network */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="ecosystemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00ff99" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Network connections */}
          <path
            d="M200,150 L400,300 L600,150 L800,300 L1000,150"
            stroke="url(#ecosystemGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M200,450 L400,300 L600,450 L800,300 L1000,450"
            stroke="url(#ecosystemGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '1s'}}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text">Research</span>{' '}
            <span className="neon-green">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our global network of academic institutions, industry partners, and research organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((institution, index) => (
            <Card 
              key={index} 
              className="glass-card neon-border card-hover transition-all duration-500"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(institution.type)}`}>
                    {institution.type}
                  </span>
                </div>
                <CardTitle className="text-xl mb-3 text-white leading-tight">{institution.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {institution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchEcosystem;
