import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import ViewContacts from './pages/ViewContacts';
function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-all-contacts" element={<ViewContacts/>} />
          <Route path="/add-contact" element={<ContactForm />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
