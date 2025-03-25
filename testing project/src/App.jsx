import './App.css'
import Faqs from './assets/components/Faqs'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import HeroSection from './assets/components/HeroSection'
import HowItWorks from './assets/components/HowItWorks'
import OurSpecialties from './assets/components/OurSpecialties'
import WhyChoose from './assets/components/WhyChoose'

function App() {

  return (
    <div className='p-5'>
      <Header/>
      <HeroSection/>
      <OurSpecialties/>
      <WhyChoose/>   
      <HowItWorks/>   
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default App
