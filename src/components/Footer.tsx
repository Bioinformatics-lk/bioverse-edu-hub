
const Footer = () => {
  return (
    <footer className="bg-slate-900/98 border-t border-slate-700/50 text-white py-16 relative overflow-hidden">
      {/* Enhanced Animated Bubbles */}
      <div className="absolute inset-0">
        <div className="floating-bubble bubble-green w-16 h-16 top-10 left-10" style={{animationDelay: '0s'}}></div>
        <div className="floating-bubble bubble-purple w-20 h-20 bottom-20 right-20" style={{animationDelay: '4s'}}></div>
        <div className="floating-bubble bubble-blue w-14 h-14 top-1/2 left-1/3" style={{animationDelay: '8s'}}></div>
        <div className="floating-bubble bubble-pink w-18 h-18 bottom-1/3 right-1/4" style={{animationDelay: '12s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold rainbow-text">Bioinformatics.lk</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Pioneering the future of bioinformatics education through AI-driven discovery pipelines, 
              molecular modeling, and computational biology innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 rainbow-text text-lg">Discovery Pipeline</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Introduction to Bioinformatics</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Molecular Docking</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Network Pharmacology</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">AI in Drug Discovery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 rainbow-text text-lg">Research Resources</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Documentation Portal</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Tutorial Library</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Research Publications</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Community Forum</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 rainbow-text text-lg">Innovation Network</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="rainbow-text font-semibold">Discovery Pipeline</span>
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="rainbow-text font-semibold">Research Ecosystem</span>
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="rainbow-text font-semibold">Drug Discovery Partnerships</span>
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="rainbow-text font-semibold">Resource Persons</span>
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="rainbow-text font-semibold">Innovation Network</span>
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="rainbow-text font-semibold">Success Stories</span>
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                <span className="rainbow-text font-semibold">Connect With Us</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p className="font-medium">&copy; 2024 Bioinformatics.lk. Advancing computational biology through innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
