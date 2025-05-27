
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResearchEcosystem = () => {
  const institutions = [
    {
      name: "University of Peradeniya, Faculty of Agriculture",
      type: "Academia",
      description: "Leading agricultural research and biotechnology innovation in Sri Lanka",
      colorTheme: "blue"
    },
    {
      name: "Standard Seed Corporation, Delaware, Wilmington, USA",
      type: "Industry",
      description: "International agricultural biotechnology and seed development",
      colorTheme: "green"
    },
    {
      name: "Institute of Scientific Informatics",
      type: "Education and Research",
      description: "Advanced computational biology and bioinformatics research",
      colorTheme: "purple"
    },
    {
      name: "Global Chemistry USA",
      type: "Open Source",
      description: "Open-source chemical informatics and molecular modeling platforms",
      colorTheme: "blue"
    },
    {
      name: "Chemo-Informatics Academy, Nigeria",
      type: "Education and Research",
      description: "Chemical informatics education and drug discovery research",
      colorTheme: "green"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Academia': return 'border-blue-200 text-blue-700 bg-blue-50';
      case 'Industry': return 'border-green-200 text-green-700 bg-green-50';
      case 'Education and Research': return 'border-purple-200 text-purple-700 bg-purple-50';
      case 'Open Source': return 'border-yellow-200 text-yellow-700 bg-yellow-50';
      default: return 'border-gray-200 text-gray-700 bg-gray-50';
    }
  };

  return (
    <section id="research-ecosystem" className="py-24 light-biotech-bg relative">
      {/* Background network visualization */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="lightEcosystemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Network connections */}
          <path
            d="M200,150 L400,300 L600,150 L800,300 L1000,150"
            stroke="url(#lightEcosystemGradient)"
            strokeWidth="2"
            fill="none"
            className="gradient-animation"
          />
          <path
            d="M200,450 L400,300 L600,450 L800,300 L1000,450"
            stroke="url(#lightEcosystemGradient)"
            strokeWidth="2"
            fill="none"
            className="gradient-animation"
            style={{animationDelay: '1s'}}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="color-accent-text">Research</span>{' '}
            <span className="text-green-600">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our global network of academic institutions, industry partners, and research organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((institution, index) => (
            <Card 
              key={index} 
              className="glass-card border-gray-200 hover:border-blue-300 card-hover transition-all duration-500"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(institution.type)}`}>
                    {institution.type}
                  </span>
                </div>
                <CardTitle className="text-xl mb-3 text-gray-800 leading-tight">{institution.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
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
