import './App.css';
import HomeMainLanding  from './components/HomePage/HomeMainLanding';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Shared/NavBar'
import SchoolLandingPage from './components/LandingPages/SchoolLandingPage'
import ColledgeLandingPage from './components/LandingPages/ColledgeLandingPage'
import CorporateLandingPage from './components/LandingPages/CorporateLandingPage'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeMainLanding />} />
          <Route path="/school" element={<SchoolLandingPage />} />
          <Route path="/college" element={<ColledgeLandingPage />} />
          <Route path="/corporate" element={<CorporateLandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
