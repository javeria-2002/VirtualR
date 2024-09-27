import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LoginForm from './components/ContactForm';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6"></div>
      <HeroSection />
      <LoginForm />
    </>
  )
}

export default App