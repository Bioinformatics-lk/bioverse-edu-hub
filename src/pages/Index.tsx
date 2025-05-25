
import Navbar from '@/components/Navbar';
import BiotechHero from '@/components/BiotechHero';
import Courses from '@/components/Courses';
import News from '@/components/News';
import Recommendations from '@/components/Recommendations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BiotechHero />
      <Courses />
      <News />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
