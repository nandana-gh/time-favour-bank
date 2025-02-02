// import React from 'react';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import Signup from './pages/SignUp';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Dashboard from './pages/Dashboard';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/dashboard' element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>

//   );
// };



// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/SignUp';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Video1 from './pages/Video1';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/video1' element={<Video1 />} />
      </Routes>
    </Router>
  );
};

export default App;
