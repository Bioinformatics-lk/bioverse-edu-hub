
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Home, Book, News, Users, User } from 'lucide-react';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold gradient-text">Bioinformatics.lk</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Home size={18} />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Book size={18} />
              <span>Courses</span>
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <News size={18} />
              <span>News & Collaborations</span>
            </button>
            <button 
              onClick={() => scrollToSection('recommendations')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Users size={18} />
              <span>Student Recommendations</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <User size={18} className="mr-2" />
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Login to Bioinformatics.lk</DialogTitle>
              </DialogHeader>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Authentication with Supabase will be available soon.
                </p>
                <p className="text-sm text-muted-foreground">
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
