
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResourcePersons = () => {
  const resourcePersons = [
    {
      name: "Dr. Lakmal Ranathunga",
      qualification: "PhD in Bioinformatics",
      bio: "Leading expert in computational biology and bioinformatics with extensive research in molecular modeling and AI-driven drug discovery.",
      image: "👨‍🔬",
      colorTheme: "blue"
    },
    {
      name: "Mr. Saumya Poorni",
      qualification: "PhD reading in Aquaculture",
      bio: "Specialized in aquaculture biotechnology and marine bioinformatics with focus on sustainable aquaculture practices and genetic analysis.",
      image: "👨‍🎓",
      colorTheme: "green"
    },
    {
      name: "Mr. Anuththara Gamage",
      qualification: "B.Sc Honours, Research Scientist at S.S.C",
      bio: "Research scientist with expertise in seed biotechnology, plant genetics, and agricultural bioinformatics at Standard Seed Corporation.",
      image: "👨‍💼",
      colorTheme: "purple"
    }
  ];

  const getAccentBorder = (color: string) => {
    switch (color) {
      case 'blue': return 'border-blue-200 hover:border-blue-300';
      case 'green': return 'border-green-200 hover:border-green-300';
      case 'purple': return 'border-purple-200 hover:border-purple-300';
      default: return 'border-blue-200 hover:border-blue-300';
    }
  };

  const getQualificationColor = (color: string) => {
    switch (color) {
      case 'blue': return 'border-blue-200 text-blue-700 bg-blue-50';
      case 'green': return 'border-green-200 text-green-700 bg-green-50';
      case 'purple': return 'border-purple-200 text-purple-700 bg-purple-50';
      default: return 'border-blue-200 text-blue-700 bg-blue-50';
    }
  };

  return (
    <section id="resource-persons" className="py-24 animated-bg relative">
      {/* Animated Bubbles */}
      <div className="absolute inset-0">
        <div className="floating-bubble bubble-green w-20 h-20 top-20 left-20" style={{animationDelay: '0s'}}></div>
        <div className="floating-bubble bubble-purple w-24 h-24 bottom-20 right-20" style={{animationDelay: '2s'}}></div>
        <div className="floating-bubble bubble-pink w-18 h-18 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-green-600">Resource</span>{' '}
            <span className="text-purple-600">Persons</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished faculty and research experts driving innovation in bioinformatics education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resourcePersons.map((person, index) => (
            <Card 
              key={index} 
              className={`glass-card ${getAccentBorder(person.colorTheme)} card-hover transition-all duration-500 text-center`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader className="pb-4">
                <div className="text-6xl mb-4">{person.image}</div>
                <CardTitle className="text-xl mb-2 text-slate-800">{person.name}</CardTitle>
                <div className={`text-sm font-medium px-3 py-1 rounded-full border inline-block ${getQualificationColor(person.colorTheme)}`}>
                  {person.qualification}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-sm">
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
