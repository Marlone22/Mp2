import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Exercises from './pages/Exercises';
import About from './pages/About';
import Gallery from './pages/Gallery';


const App = () => (
  <>
  <Router>
    <Navbar/>
  <Routes>
   <Route exact path='/' element={<Home />}/>
   <Route path='/About' element={<About/>}/>
   <Route path='/Exercises' element={<Exercises/>}/>
   <Route path='/Gallery' element={<Gallery/>}/>
  </Routes>
    <Footer />
  </Router>
  </>
);

export default App;