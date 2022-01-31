import React from 'react';
import './App.css';
import PaginaIndisponibila from './pages/PaginaIndisponibila'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


import Produse from './pages/Produse';
import Despre from './pages/Despre';
import Logare from './pages/Logare';
import Acasa from './pages/Acasa'
import Inregistrare from './pages/Inregistrare';

function App() {
  
  return (
    <BrowserRouter>
      <nav>
        <Link to={'Acasa'}>Artizanalii</Link>
        <Link to={'Despre'}>Despre</Link>
        <Link to={'Produse'}>Produse</Link>
        <Link to={'Logare'}>Logare</Link>
        <Link to={'Inregistrare'}>Înregistrare</Link>
      </nav>
      <Routes>
        <Route path='/acasa' element={<Acasa />}></Route>
        <Route path='/despre' element={<Despre />}></Route>
        <Route path='/logare' element={<Logare />}></Route>
        <Route path='/inregistrare' element={<Inregistrare />}></Route>
        <Route path='/delogare' element={''}></Route>
        <Route path='/produse' element={<Produse />}></Route>

        <Route path='*' element={<PaginaIndisponibila />}></Route>
      </Routes>

      
    <div className="App">

    </div>
    </BrowserRouter>
  );
}

export default App;
