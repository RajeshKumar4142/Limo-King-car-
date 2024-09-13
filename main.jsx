import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/home/Home.jsx';
import Layout from './layout.jsx';
import Page from './components/pages/Page.jsx';
import Fleet from './components/fleet/Fleet.jsx';
import Service from './components/service/Service.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = "page" element={< Page/>} />
          <Route path = "fleet" element={<Fleet />} />
          <Route path = "service" element={<Service />} />
          <Route path = "portfolio" element={<Portfolio/>} />
          <Route path = "contact" element={<Contact/>} />
          
          {/* Add more routes here if needed */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
