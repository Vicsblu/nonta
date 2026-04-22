// src/App.jsx
import { useNavScroll }    from './hooks/useNavScroll'
import { useScrollReveal } from './hooks/useScrollReveal'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import TrustBar      from './components/TrustBar'
import Services      from './components/Services'
import Process       from './components/Process'
import Projects      from './components/Projects'
import WhyUs         from './components/WhyUs'
import TrustSection  from './components/TrustSection'
import CtaStrip      from './components/CtaStrip'
import Testimonials  from './components/Testimonials'
import Faq           from './components/Faq'
import EnergyTips    from './components/EnergyTips'
import Coverage      from './components/Coverage'
import About         from './components/About'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import FloatingWa    from './components/FloatingWa'

export default function App() {
  useNavScroll()
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Projects />
      <WhyUs />
      <TrustSection />
      <CtaStrip />
      <Testimonials />
      <Faq />
      <EnergyTips />
      <Coverage />
      <About />
      <Contact />
      <Footer />
      <FloatingWa />
    </>
  )
}
