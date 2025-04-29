
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import BookingAndRefund from './pages/BookingAndRefund'
import Carousel from './pages/Carousel'
import Contact from './pages/Contact'
import CoordinatorsSection from './pages/CoordinatorsSection'
import Details from './pages/Details'


function App() {
 

  return (
    <>
      <Header/>
      <About/>
      <Carousel/>
      <Contact/>
      <Details/>
      <BookingAndRefund/>
      <CoordinatorsSection/>
      <Footer/>
    </>
  )
}

export default App
