import React from 'react';
import Navbar from './component/Navbar';
import Form from './component/Form';
// import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Read from './component/Read';
import Update from './component/Update';

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' exact element={<Form/>}/>
  <Route path='/read' exact element={<Read/>}/>
  <Route path='/edit/:id' exact element={<Update/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
