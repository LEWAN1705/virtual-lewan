import React from 'react'
import Navbar from './componets/Navbar'
import HeroSection from './componets/HeroSection'
import FeatureSection from './componets/FeatureSection'
import Workflow from './componets/Workflow'

const App = () => {
  return (
    <>
    <Navbar /> 
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
    </div>
    </>
  )
}

export default App