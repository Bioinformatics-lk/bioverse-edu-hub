
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DrugDiscoveryPartnerships = () => {
  const partnerships = [
    {
      name: "University of Peradeniya",
      department: "Faculty of Agriculture",
      focus: "Veterinary drug discovery and animal health biotechnology",
      colorTheme: "blue"
    },
    {
      name: "Institute of Scientific Informatics",
      department: "Computational Biology Division",
      focus: "AI-driven drug discovery and molecular modeling",
      colorTheme: "green"
    },
    {
      name: "Chemo-Informatics Academy",
      department: "Drug Discovery Research Center",
      focus: "Chemical informatics and QSAR modeling",
      colorTheme: "purple"
    },
    {
      name: "Global Chemistry Inc USA",
      department: "Open Source Projects",
      focus: "Open-source drug discovery platforms and chemical databases",
      colorTheme: "blue"
    },
    {
      name: "University of Ruhuna",
      department: "Faculty of Medicine",
      focus: "Nano-drug discovery and targeted therapy development",
      colorTheme: "green"
    }
  ];

  return (
    <section id="partnerships" className="py-24 animated-bg relative">
      {/* Enhanced Animated Bubbles */}
      <div className="absolute inset-0">
        <div className="floating-bubble bubble-pink w-24 h-24 top-24 left-32" style={{animationDelay: '1s'}}></div>
        <div className="floating-bubble bubble-green w-20 h-20 bottom-40 right-24" style={{animationDelay: '3s'}}></div>
        <div className="floating-bubble bubble-blue w-28 h-28 top-1/2 left-1/4" style={{animationDelay: '5s'}}></div>
        <div className="floating-bubble bubble-purple w-32 h-32 top-1/3 right-1/3" style={{animationDelay: '7s'}}></div>
        <div className="floating-bubble bubble-pink w-18 h-18 bottom-1/4 left-1/5" style={{animationDelay: '9s'}}></div>
      </div>

      {/* Enhanced pipeline-style background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 Q200,200 400,400 T800,400 Q1000,200 1200,400"
            stroke="url(#pipelineGradient)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse flowing-line"
          />
          <circle cx="200" cy="300" r="8" fill="#3b82f6" className="animate-pulse floating-bubble" />
          <circle cx="400" cy="400" r="8" fill="#10b981" className="animate-pulse floating-bubble" style={{animationDelay: '0.5s'}} />
          <circle cx="600" cy="300" r="8" fill="#8b5cf6" className="animate-pulse floating-bubble" style={{animationDelay: '1s'}} />
          <circle cx="800" cy="400" r="8" fill="#3b82f6" className="animate-pulse floating-bubble" style={{animationDelay: '1.5s'}} />
          <circle cx="1000" cy="300" r="8" fill="#10b981" className="animate-pulse floating-bubble" style={{animationDelay: '2s'}} />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="rainbow-text">Drug Discovery</span>{' '}
            <span className="color-accent-text">Partnerships</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Collaborative research initiatives advancing pharmaceutical innovation and therapeutic development
          </p>
        </div>

        {/* Circular Partnership Arrangement */}
        <div className="partnership-circle relative mb-16">
          {/* Center Logo */}
          <div className="center-logo rainbow-text">
            Bioinformatics.lk
          </div>
          
          {/* Partnership Items arranged in circle */}
          {partnerships.map((partnership, index) => (
            <div key={index} className="partnership-item">
              <Card className="glass-card border-slate-200 hover:border-blue-300 card-hover transition-all duration-500 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm mb-1 rainbow-text leading-tight">{partnership.name}</CardTitle>
                  <div className="color-accent-text text-xs font-medium">{partnership.department}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-700 leading-relaxed text-xs">
                    {partnership.focus}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional partnerships grid for better visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partnerships.map((partnership, index) => (
            <Card 
              key={`grid-${index}`} 
              className="glass-card border-slate-200 hover:border-blue-300 card-hover transition-all duration-500"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg mb-2 rainbow-text leading-tight">{partnership.name}</CardTitle>
                <div className="color-accent-text text-sm font-medium">{partnership.department}</div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
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
