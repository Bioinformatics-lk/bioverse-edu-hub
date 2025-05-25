
import Navbar from '@/components/Navbar';
import DNAHero from '@/components/DNAHero';
import Courses from '@/components/Courses';
import News from '@/components/News';
import Recommendations from '@/components/Recommendations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DNAHero />
      <Courses />
      <News />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
