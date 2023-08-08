import { useEffect } from 'react';
import {Routes, Route, HashRouter} from "react-router-dom";

import { useTypeDispatch } from './hooks/useTypeDispatch';
import { UseAnimateProps, useAnimate } from './hooks/useAnimate';

import MainLayout from './Layouts/MainLayout';
import Main from './pages/Main';
import Works from './pages/Works';

import './App.scss';
import Admin from './pages/Admin';

function App() {
  
  return (
    <HashRouter >
      <Routes>
        <Route path='/' element={<MainLayout />} >
            <Route path='/' element={<Main />} />
            <Route path='works' element={<Works />} />
            <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>    
    </HashRouter>
  );
}

export default App;
