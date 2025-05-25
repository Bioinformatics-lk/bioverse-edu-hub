
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      title: "AI-Driven Drug Discovery Partnership",
      date: "March 15, 2024",
      description: "Breakthrough collaboration with University of Colombo's Faculty of Medicine to develop next-generation AI models for pharmaceutical research.",
      category: "Partnership",
      neonColor: "cyan"
    },
    {
      title: "Quantum Biology Workshop Series",
      date: "March 10, 2024",
      description: "Launching comprehensive quantum computing applications in molecular biology and protein folding prediction algorithms.",
      category: "Education",
      neonColor: "green"
    },
    {
      title: "Student Research Breakthrough",
      date: "March 5, 2024",
      description: "Our students' groundbreaking research on CRISPR optimization using machine learning published in Nature Biotechnology.",
      category: "Research",
      neonColor: "purple"
    }
  ];

  const collaborations = [
    { name: "University of Colombo", logo: "🏛️", type: "Academic" },
    { name: "SLINTEC", logo: "🔬", type: "Research" },
    { name: "National Science Foundation", logo: "🧪", type: "Funding" },
    { name: "BioPharma Research Labs", logo: "💊", type: "Industry" }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Partnership': return 'border-cyan-400/30 text-cyan-300';
      case 'Education': return 'border-green-400/30 text-green-300';
      case 'Research': return 'border-purple-400/30 text-purple-300';
      default: return 'border-gray-400/30 text-gray-300';
    }
  };

  return (
    <section id="news" className="py-24 biotech-bg relative">
      {/* Pipeline Connections */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="newsPipeline" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00ff99" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M100,100 Q300,300 600,200 T1100,400"
            stroke="url(#newsPipeline)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M200,600 Q500,400 800,500 T1000,700"
            stroke="url(#newsPipeline)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '2s'}}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text">Innovation</span>{' '}
            <span className="neon-purple">Network</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay connected with the latest breakthroughs and our expanding ecosystem of partnerships
          </p>
        </div>

        {/* News Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-12 text-center neon-green">Latest Discoveries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="glass-card border-gray-600/30 card-hover neon-border">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-400">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg text-white mb-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <Button variant="outline" size="sm" className="glass-dark border-cyan-400/30 text-cyan-300 hover:text-cyan-200">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaborations Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-12 text-center neon-purple">Research Ecosystem</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collaborations.map((partner, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 text-center card-hover neon-border"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <p className="font-medium text-white text-sm mb-2">{partner.name}</p>
                <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
