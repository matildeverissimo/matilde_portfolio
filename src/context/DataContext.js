import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultData } from '../data/defaultData';
const DataContext = createContext();
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
};
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolioData');
    return saved ? JSON.parse(saved) : defaultData;
  });
  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);
  const updateProfile = (profile) => {
    setData(prev => ({ ...prev, profile }));
  };
  const updateProjects = (projects) => {
    setData(prev => ({ ...prev, projects }));
  };
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now().toString()
    };
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };
  const updateProject = (id, updatedProject) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => 
        p.id === id ? { ...p, ...updatedProject } : p
      )
    }));
  };
  const deleteProject = (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };
  const resetData = () => {
    setData(defaultData);
  };
  return (
    <DataContext.Provider value={{
      data,
      updateProfile,
      updateProjects,
      addProject,
      updateProject,
      deleteProject,
      resetData
    }}>
      {children}
    </DataContext.Provider>
  );
};