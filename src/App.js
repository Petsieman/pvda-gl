import './App.css';
import { Routes, Route  } from 'react-router-dom'
import Home from './pages';
import Mensen from './pages/Mensen';
import Standpunten from './pages/Standpunten';


function App() {
  return (
    
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path='/mensen' element={<Mensen/>} />
      <Route path='/standpunten' element={<Standpunten/>} />
    </Routes>
    
  );
}

export default App;
