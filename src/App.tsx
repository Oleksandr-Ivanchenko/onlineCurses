
import './App.scss'
import './styles/main.scss';
import AboutUs from './components/AboutUs/AboutUs'
import Advantages from './components/Advantages/Advantages'
import Faq from './components/FAQ/Faq'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LeadMagnet from './components/LeadMagnet/LeadMagnet'
import OurCourses from './components/OurCourses/OurCourses'
import Testimonials from './components/Testimonials/Testimonials'



function App() {

  return (
    
    <>
      <Header />
      <Advantages />
      <AboutUs />
      <OurCourses />
      <LeadMagnet />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  )
}

export default App
