
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Courses = () => {
  const courses = [
    {
      title: "Introduction to Bioinformatics",
      description: "Fundamentals of computational biology, sequence analysis, and database searching",
      duration: "8 weeks",
      level: "Beginner",
      neonColor: "cyan"
    },
    {
      title: "Network Pharmacology",
      description: "Systems biology approaches to drug discovery and target identification",
      duration: "6 weeks",
      level: "Intermediate",
      neonColor: "green"
    },
    {
      title: "Molecular Docking",
      description: "Computer-aided drug design and protein-ligand interaction analysis",
      duration: "4 weeks",
      level: "Intermediate",
      neonColor: "purple"
    },
    {
      title: "Molecular Dynamics",
      description: "Simulation of biomolecular systems and conformational analysis",
      duration: "6 weeks",
      level: "Advanced",
      neonColor: "cyan"
    },
    {
      title: "AI and ML in Drug Discovery",
      description: "Machine learning applications in pharmaceutical research and development",
      duration: "8 weeks",
      level: "Advanced",
      neonColor: "green"
    },
    {
      title: "Introduction to Cheminformatics",
      description: "Chemical data analysis, molecular descriptors, and QSAR modeling",
      duration: "5 weeks",
      level: "Beginner",
      neonColor: "purple"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-400/30';
      case 'Intermediate': return 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30';
      case 'Advanced': return 'bg-purple-500/20 text-purple-300 border-purple-400/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  const getNeonBorder = (color: string) => {
    switch (color) {
      case 'cyan': return 'border-cyan-400/30 hover:border-cyan-400/60';
      case 'green': return 'border-green-400/30 hover:border-green-400/60';
      case 'purple': return 'border-purple-400/30 hover:border-purple-400/60';
      default: return 'border-cyan-400/30 hover:border-cyan-400/60';
    }
  };

  return (
    <section id="courses" className="py-24 biotech-bg relative">
      {/* Pipeline Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="coursesPipeline" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00ff99" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 Q200,100 400,200 T800,300 Q1000,400 1200,300"
            stroke="url(#coursesPipeline)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text">Discovery</span>{' '}
            <span className="neon-green">Pipeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Navigate through our comprehensive curriculum designed to transform you from 
            beginner to advanced bioinformatics professional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`glass-card ${getNeonBorder(course.neonColor)} card-hover transition-all duration-500`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-600/30">
                    {course.duration}
                  </span>
                </div>
                <CardTitle className="text-xl mb-3 text-white">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>
                <Button className="w-full neon-button">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
