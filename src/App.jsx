import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Onboarding from './components/Onboarding';
import Proposal from './components/Proposal';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="profile" element={<Profile />} />
        <Route path="onboarding" element={<Onboarding />} />
      </Route>
      <Route path="/proposal" element={<Proposal />} />
    </Routes>
  );
}

export default App;