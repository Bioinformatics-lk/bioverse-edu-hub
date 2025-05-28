
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Book, Newspaper, Users, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, loading } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-light border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold color-accent-text">Bioinformatics.lk</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium group"
              >
                <Home size={18} className="group-hover:text-blue-600" />
                <span>Home</span>
              </button>
              {user && (
                <button 
                  onClick={() => scrollToSection('curriculum')}
                  className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium group"
                >
                  <Book size={18} className="group-hover:text-blue-600" />
                  <span>Curriculum</span>
                </button>
              )}
              <button 
                onClick={() => scrollToSection('news')}
                className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium group"
              >
                <Newspaper size={18} className="group-hover:text-blue-600" />
                <span>News & Collaborations</span>
              </button>
              <button 
                onClick={() => scrollToSection('recommendations')}
                className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium group"
              >
                <Users size={18} className="group-hover:text-blue-600" />
                <span>Student Recommendations</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {!loading && (
                user ? (
                  <Button onClick={handleLogout} className="professional-button">
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </Button>
                ) : (
                  <Button onClick={() => setIsAuthModalOpen(true)} className="professional-button">
                    <User size={18} className="mr-2" />
                    Login
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
