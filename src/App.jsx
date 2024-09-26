import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage/>}/>
        <Route path='/loginpage' element={<LoginPage/>}/>
        <Route path='/registrationpage' element={<RegistrationPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App
