
import Navbar from '@/components/Navbar';
import BiotechHero from '@/components/BiotechHero';
import Courses from '@/components/Courses';
import ResearchEcosystem from '@/components/ResearchEcosystem';
import DrugDiscoveryPartnerships from '@/components/DrugDiscoveryPartnerships';
import ResourcePersons from '@/components/ResourcePersons';
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
      <ResearchEcosystem />
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
