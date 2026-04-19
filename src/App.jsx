import {Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

function App(){
  return(
    <div className='min-h-screen bg-primary'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;