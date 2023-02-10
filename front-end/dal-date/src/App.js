import './App.css';
import WelcomePage from './WelcomePage';
import React, {useRef} from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/loginPage" element={<LoginPage/>}/>
    </Routes>
    );
}

export default App;
