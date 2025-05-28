
import { BookOpen, Microscope, Brain, Code, Database, FlaskConical } from 'lucide-react'

const ProtectedCurriculum = () => {
  const courses = [
    {
      title: "Introduction to Bioinformatics",
      description: "Foundation course covering basic principles and applications of bioinformatics",
      icon: BookOpen,
      image: "/placeholder.svg?height=200&width=300&text=DNA+Sequence"
    },
    {
      title: "Molecular Docking & Drug Design",
      description: "Learn computational methods for drug discovery and molecular interaction studies",
      icon: Microscope,
      image: "/placeholder.svg?height=200&width=300&text=Molecular+Structure"
    },
    {
      title: "Machine Learning in Biology",
      description: "Apply AI and ML techniques to solve complex biological problems",
      icon: Brain,
      image: "/placeholder.svg?height=200&width=300&text=Neural+Network"
    },
    {
      title: "Programming for Bioinformatics",
      description: "Master Python, R, and other programming languages for biological data analysis",
      icon: Code,
      image: "/placeholder.svg?height=200&width=300&text=Code+Biology"
    },
    {
      title: "Genomics & Proteomics",
      description: "Comprehensive study of genome and protein analysis techniques",
      icon: Database,
      image: "/placeholder.svg?height=200&width=300&text=Genome+Data"
    },
    {
      title: "Structural Bioinformatics",
      description: "Analyze and predict protein structures using computational methods",
      icon: FlaskConical,
      image: "/placeholder.svg?height=200&width=300&text=Protein+Structure"
    }
  ]

  return (
    <section id="curriculum" className="py-20 animated-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 color-accent-text">
          Comprehensive Curriculum
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <course.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    {course.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProtectedCurriculum
