
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DrugDiscoveryPartnerships = () => {
  const partnerships = [
    {
      name: "University of Peradeniya, Faculty of Agriculture",
      department: "Department of Animal Science",
      focus: "Veterinary drug discovery and animal health biotechnology",
      neonColor: "cyan"
    },
    {
      name: "Institute of Scientific Informatics",
      department: "Computational Biology Division",
      focus: "AI-driven drug discovery and molecular modeling",
      neonColor: "green"
    },
    {
      name: "Chemo-Informatics Academy",
      department: "Drug Discovery Research Center",
      focus: "Chemical informatics and QSAR modeling",
      neonColor: "purple"
    },
    {
      name: "Global Chemistry Inc USA",
      department: "Open Source Projects",
      focus: "Open-source drug discovery platforms and chemical databases",
      neonColor: "cyan"
    },
    {
      name: "University of Ruhuna, Faculty of Medicine",
      department: "Department of Biochemistry",
      focus: "Nano-drug discovery and targeted therapy development",
      neonColor: "green"
    }
  ];

  return (
    <section id="partnerships" className="py-24 biotech-bg relative">
      {/* Pipeline-style background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#00ff99" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#00ff99" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00ffff" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Pipeline connections */}
          <path
            d="M0,400 Q200,200 400,400 T800,400 Q1000,200 1200,400"
            stroke="url(#pipelineGradient)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
          />
          {/* Pipeline nodes */}
          <circle cx="200" cy="300" r="8" fill="#00ffff" className="animate-pulse" />
          <circle cx="400" cy="400" r="8" fill="#00ff99" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          <circle cx="600" cy="300" r="8" fill="#ff00ff" className="animate-pulse" style={{animationDelay: '1s'}} />
          <circle cx="800" cy="400" r="8" fill="#00ffff" className="animate-pulse" style={{animationDelay: '1.5s'}} />
          <circle cx="1000" cy="300" r="8" fill="#00ff99" className="animate-pulse" style={{animationDelay: '2s'}} />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-purple">Drug Discovery</span>{' '}
            <span className="neon-text">Partnerships</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Collaborative research initiatives advancing pharmaceutical innovation and therapeutic development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {partnerships.map((partnership, index) => (
            <Card 
              key={index} 
              className="glass-card neon-border card-hover transition-all duration-500 relative"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Pipeline connector line */}
              {index < partnerships.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-60"></div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2 text-white leading-tight">{partnership.name}</CardTitle>
                <div className="text-cyan-300 text-sm font-medium">{partnership.department}</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {partnership.focus}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrugDiscoveryPartnerships;
