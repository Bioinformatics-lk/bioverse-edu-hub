
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold color-accent-text">Bioinformatics.lk</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Pioneering the future of bioinformatics education through AI-driven discovery pipelines, 
              molecular modeling, and computational biology innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 color-accent-text text-lg">Discovery Pipeline</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Introduction to Bioinformatics</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Molecular Docking</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Network Pharmacology</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">AI in Drug Discovery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 color-accent-text text-lg">Research Resources</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Documentation Portal</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Tutorial Library</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Research Publications</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Community Forum</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 color-accent-text text-lg">Innovation Network</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">LinkedIn Research</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">ResearchGate</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Twitter Updates</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">YouTube Channel</li>
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
