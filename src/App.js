import React, { useState } from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventRegistrationForm from './EventRegistrationFrom';
// import EventRegistrationDetails from './EventRegestrationDetails';
import AllEventDetails from './AllEventDetails';

function App() {
  const [allEvents, setAllEvents] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
              <Route path='/allRegisters' element={<AllEventDetails allEvents={allEvents} />} />
              <Route path='/register' element={<EventRegistrationForm setAllEvents={setAllEvents} />} />
              <Route path='/' element={<EventRegistrationForm setAllEvents={setAllEvents} />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
