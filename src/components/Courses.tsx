
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Courses = () => {
  const courses = [
    {
      title: "Introduction to Bioinformatics",
      description: "Fundamentals of computational biology, sequence analysis, and database searching",
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      title: "Network Pharmacology",
      description: "Systems biology approaches to drug discovery and target identification",
      duration: "6 weeks",
      level: "Intermediate"
    },
    {
      title: "Molecular Docking",
      description: "Computer-aided drug design and protein-ligand interaction analysis",
      duration: "4 weeks",
      level: "Intermediate"
    },
    {
      title: "Molecular Dynamics",
      description: "Simulation of biomolecular systems and conformational analysis",
      duration: "6 weeks",
      level: "Advanced"
    },
    {
      title: "AI and ML in Drug Discovery",
      description: "Machine learning applications in pharmaceutical research and development",
      duration: "8 weeks",
      level: "Advanced"
    },
    {
      title: "Introduction to Cheminformatics",
      description: "Chemical data analysis, molecular descriptors, and QSAR modeling",
      duration: "5 weeks",
      level: "Beginner"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive curriculum designed to take you from basics to advanced applications in bioinformatics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <span className="text-sm text-muted-foreground">{course.duration}</span>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>
                <Button className="w-full">
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
