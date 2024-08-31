<<<<<<< HEAD
function App() {
  return (
    <div>
      <h1>hello wolrd</h1>
    </div>
=======
// App.jsx
import React from 'react';
import Header from './components/Header';

import Footer from './components/Footer';

import PassWord from './pages/PassWord';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Memory from './pages/Memory'
const App = () => {
  return (

    
    <BrowserRouter>
    <Header></Header>
        <Routes>
          <Route path="/" element={<Memory />} />
          <Route path="/password" element={<PassWord />} />

        </Routes>
        <Footer></Footer>
    </BrowserRouter>
>>>>>>> 0a430aa (group details)
  );
};

export default App;
