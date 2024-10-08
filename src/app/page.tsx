import Alumni from '@/components/Alumni';
// import Contactinfo from '@/components/Contactinfo';
import Footer from '@/components/Footer';
import FromTnPSection from '@/components/FromTNPSection';
import Hero from '@/components/Hero';
import OurTeam from '@/components/OurTeam';
import Pastrecruiters from '@/components/Pastrecruiters';
import PlacementStatistics from '@/components/PlacementStatistics';
import TestimonialSection from '@/components/TestimonialSection';
import WhyKGECSection from '@/components/WhyKGECSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyKGECSection />
      <FromTnPSection />
      <TestimonialSection />
      <PlacementStatistics />
      <Pastrecruiters />
      <OurTeam />
      <Alumni />
      <Footer />
    </main>
  );
}
