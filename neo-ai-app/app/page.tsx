
import BenefitSection from '@/features/benefit'
import FAQSection from '@/features/faq-section'
import FeaturesSection from '@/features/features-ai'
import Footer from '@/features/footer'
import HeaderSection from '@/features/header'
import HeroSection from '@/features/Hero'
import PrincingPlansSection from '@/features/pricing-plans'
import ReviewSection from '@/features/reviews'
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
      <PrincingPlansSection />
      <ReviewSection />
      <FAQSection />
      <Footer />
      </div>
  )
}

export default HomePage