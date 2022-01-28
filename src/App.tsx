import React from 'react';
import './App.css';
import PaginaIndisponibila from './pages/PaginaIndisponibila'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


import Produse from './pages/Produse';
import Despre from './pages/Despre';

function App() {
  
  return (
    <BrowserRouter>
      <nav>
        <Link to={''}>Artizanalii</Link>
        <Link to={'Despre'}>Despre</Link>
        <Link to={'Produse'}>Produse</Link>
        <Link to={''}>Logare</Link>
      </nav>
      <Routes>
        <Route path='/' element={''}></Route>
        <Route path='/despre' element={<Despre />}></Route>
        <Route path='/Logare' element={''}></Route>
        <Route path='/creare-cont' element={''}></Route>
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
