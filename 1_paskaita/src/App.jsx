import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
