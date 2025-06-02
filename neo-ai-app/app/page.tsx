
import BenefitSection from '@/features/benefit'
import FeaturesSection from '@/features/features-ai'
import HeaderSection from '@/features/header'
import HeroSection from '@/features/Hero'
import SponsorsSection from '@/features/sponsors'


const HomePage = () =>
{
  

  return (
    <div >
      <HeaderSection />
      <HeroSection />
      <SponsorsSection />
      <BenefitSection />
      <FeaturesSection />
    </div>
  )
}

export default HomePage