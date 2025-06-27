import React from 'react'
import Navbar from './componets/Navbar'
import HeroSection from './componets/HeroSection'
import FeatureSection from './componets/FeatureSection'
import Workflow from './componets/Workflow'
import Pricing from './componets/Pricing'
import Testimonials from './componets/Testimonials'

const App = () => {
  return (
    <>
    <Navbar /> 
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
    </div>
    </>
  )
}

export default App