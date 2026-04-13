import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Backoffice from './pages/Backoffice';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projeto/:id" element={<ProjectDetail />} />
      <Route path="/admin" element={<Backoffice />} />
    </Routes>
  );
}
export default App;