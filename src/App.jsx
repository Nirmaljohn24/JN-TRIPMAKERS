
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import BookingAndRefund from './pages/BookingAndRefund'
import Carousel from './pages/Carousel'
import Contact from './pages/Contact'
import CoordinatorsSection from './pages/CoordinatorsSection'
import Details from './pages/Details'
import SimpleForm from './pages/SimpleForm'
import TaskBoard from './pages/TaskBoard'


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
      {/* <TaskBoard/> */}
      
      <Footer/>
    </>
  )
}

export default App
