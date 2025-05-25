
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResourcePersons = () => {
  const resourcePersons = [
    {
      name: "Dr. Lakmal Ranathunga",
      qualification: "PhD in Bioinformatics",
      bio: "Leading expert in computational biology and bioinformatics with extensive research in molecular modeling and AI-driven drug discovery.",
      image: "👨‍🔬", // Placeholder emoji
      neonColor: "cyan"
    },
    {
      name: "Mr. Saumya Poorni",
      qualification: "PhD reading in Aquaculture",
      bio: "Specialized in aquaculture biotechnology and marine bioinformatics with focus on sustainable aquaculture practices and genetic analysis.",
      image: "👨‍🎓", // Placeholder emoji
      neonColor: "green"
    },
    {
      name: "Mr. Anuththara Gamage",
      qualification: "B.Sc Honours, Research Scientist at S.S.C",
      bio: "Research scientist with expertise in seed biotechnology, plant genetics, and agricultural bioinformatics at Standard Seed Corporation.",
      image: "👨‍💼", // Placeholder emoji
      neonColor: "purple"
    }
  ];

  const getNeonBorder = (color: string) => {
    switch (color) {
      case 'cyan': return 'border-cyan-400/30 hover:border-cyan-400/60';
      case 'green': return 'border-green-400/30 hover:border-green-400/60';
      case 'purple': return 'border-purple-400/30 hover:border-purple-400/60';
      default: return 'border-cyan-400/30 hover:border-cyan-400/60';
    }
  };

  return (
    <section id="resource-persons" className="py-24 biotech-bg relative">
      {/* Molecular structure background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-green">Resource</span>{' '}
            <span className="neon-purple">Persons</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished faculty and research experts driving innovation in bioinformatics education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resourcePersons.map((person, index) => (
            <Card 
              key={index} 
              className={`glass-card ${getNeonBorder(person.neonColor)} card-hover transition-all duration-500 text-center`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader className="pb-4">
                <div className="text-6xl mb-4">{person.image}</div>
                <CardTitle className="text-xl mb-2 text-white">{person.name}</CardTitle>
                <div className={`text-sm font-medium px-3 py-1 rounded-full border inline-block ${
                  person.neonColor === 'cyan' ? 'border-cyan-400/30 text-cyan-300' :
                  person.neonColor === 'green' ? 'border-green-400/30 text-green-300' :
                  'border-purple-400/30 text-purple-300'
                }`}>
                  {person.qualification}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {person.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcePersons;
