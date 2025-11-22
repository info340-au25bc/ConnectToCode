import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Onboarding from './components/Onboarding';
import Proposal from './components/Proposal';
import ProjectUpload from './components/ProjectUpload';
import ProjectConfirmation from './components/ProjectConfirmation';
import Preferences from './components/preferences';
import Settings from './components/settings';
import Terms from './components/terms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="profile" element={<Profile />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="project-upload" element={<ProjectUpload />} />
        <Route path="project-confirmation" element={<ProjectConfirmation />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="settings" element={<Settings />} />
        <Route path="terms" element={<Terms />} />
      </Route>
      <Route path="/proposal" element={<Proposal />} />
    </Routes>
  );
}

export default App;