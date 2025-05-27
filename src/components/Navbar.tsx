
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Home, Book, Newspaper, Users, User } from 'lucide-react';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-light border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center color-glow-blue">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold color-accent-text">Bioinformatics.lk</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              <Home size={18} className="group-hover:text-blue-600" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              <Book size={18} className="group-hover:text-blue-600" />
              <span>Courses</span>
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              <Newspaper size={18} className="group-hover:text-blue-600" />
              <span>News & Collaborations</span>
            </button>
            <button 
              onClick={() => scrollToSection('recommendations')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              <Users size={18} className="group-hover:text-blue-600" />
              <span>Student Recommendations</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button className="professional-button">
                <User size={18} className="mr-2" />
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-light border-gray-200">
              <DialogHeader>
                <DialogTitle className="color-accent-text">Login to Bioinformatics.lk</DialogTitle>
              </DialogHeader>
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">
                  Authentication with Supabase will be available soon.
                </p>
                <p className="text-sm text-gray-500">
                  Connect your Lovable project to Supabase to enable login functionality.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
