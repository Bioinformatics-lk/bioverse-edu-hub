
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Book, Newspaper, Users, User, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-light border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/6ed14a7d-429b-4411-ad9e-47a06822b24a.png" 
                alt="Bioinformatics.lk Logo"
                className="w-full h-full object-cover"
              />
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
            <button 
              onClick={() => scrollToSection('courses')}
              className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              <Book size={18} className="group-hover:text-blue-600" />
              <span>Courses</span>
            </button>
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
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-slate-700">Welcome, {user.email}</span>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
                className="professional-button"
                onClick={() => setIsAuthModalOpen(true)}
              >
                <User size={18} className="mr-2" />
                Login
              </Button>
            )}
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
