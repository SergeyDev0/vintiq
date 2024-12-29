import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Test from './pages/test/Test';

function App() {

  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<Test />} />
			</Routes>
    </BrowserRouter>
  )
}

export default App
