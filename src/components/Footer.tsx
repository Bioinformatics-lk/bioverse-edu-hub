
const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-cyan-500/20 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center neon-glow">
                <span className="text-black font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold neon-text">Bioinformatics.lk</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the future of bioinformatics education through AI-driven discovery pipelines, 
              molecular modeling, and computational biology innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 neon-green">Discovery Pipeline</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Introduction to Bioinformatics</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Molecular Docking</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Network Pharmacology</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">AI in Drug Discovery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 neon-purple">Research Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation Portal</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Tutorial Library</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Research Publications</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Community Forum</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 neon-text">Innovation Network</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">LinkedIn Research</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">ResearchGate</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Twitter Updates</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">YouTube Channel</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Bioinformatics.lk. Advancing computational biology through innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
