import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import CV from './pages/Cv';
import Home from './pages/Home'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/CV' element={<CV />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}
function Layout() {
  return (
    <div>
      <Navbar />      
      <Outlet />
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/Home">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;