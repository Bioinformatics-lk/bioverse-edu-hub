
import Navbar from '@/components/Navbar';
import BiotechHero from '@/components/BiotechHero';
import Courses from '@/components/Courses';
import AnimatedStats from '@/components/AnimatedStats';
import ProtectedCurriculum from '@/components/ProtectedCurriculum';
import DrugDiscoveryPartnerships from '@/components/DrugDiscoveryPartnerships';
import ResourcePersons from '@/components/ResourcePersons';
import News from '@/components/News';
import Recommendations from '@/components/Recommendations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl color-accent-text">Loading...</div>
      </div>
    );
  }

  if (user) {
    // Show only curriculum for authenticated users
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <ProtectedCurriculum />
        </div>
        <Footer />
      </div>
    );
  }

  // Show full website for non-authenticated users
  return (
    <div className="min-h-screen">
      <Navbar />
      <BiotechHero />
      <Courses />
      <AnimatedStats />
      <DrugDiscoveryPartnerships />
      <ResourcePersons />
      <News />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
