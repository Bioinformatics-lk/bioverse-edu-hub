
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">Bioinformatics.lk</span>
            </div>
            <p className="text-gray-300 text-sm">
              Advancing bioinformatics education in Sri Lanka and beyond through cutting-edge courses and research collaborations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Introduction to Bioinformatics</li>
              <li>Molecular Docking</li>
              <li>Network Pharmacology</li>
              <li>AI in Drug Discovery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Documentation</li>
              <li>Tutorials</li>
              <li>Research Papers</li>
              <li>Community Forum</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>LinkedIn</li>
              <li>ResearchGate</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Bioinformatics.lk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
