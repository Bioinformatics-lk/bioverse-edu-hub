
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
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

const Index = () => {
  const [user, setUser] = useState<User | null>(null);

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <BiotechHero />
      <AnimatedStats />
      {user ? (
        <ProtectedCurriculum />
      ) : (
        <>
          <Courses />
          <DrugDiscoveryPartnerships />
          <ResourcePersons />
          <News />
          <Recommendations />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Index;
