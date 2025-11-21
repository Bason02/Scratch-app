import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { LevelView } from './components/LevelView';
import { LEVELS } from './data';
import { UserProgress } from './types';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Initialize state from localStorage or default
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('scratchAdventureProgress');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      completedLevels: [],
      currentLevelId: 1
    };
  });

  // Save progress whenever it changes
  useEffect(() => {
    localStorage.setItem('scratchAdventureProgress', JSON.stringify(progress));
  }, [progress]);

  const currentLevel = LEVELS.find(l => l.id === progress.currentLevelId) || LEVELS[0];

  const handleLevelSelect = (id: number) => {
    // Can only switch to unlocked levels
    const maxUnlocked = Math.max(0, ...progress.completedLevels) + 1;
    if (id <= maxUnlocked) {
      setProgress(prev => ({ ...prev, currentLevelId: id }));
      setSidebarOpen(false); // Close sidebar on mobile on selection
    }
  };

  const handleLevelComplete = (id: number) => {
    setProgress(prev => {
      const newCompleted = prev.completedLevels.includes(id) 
        ? prev.completedLevels 
        : [...prev.completedLevels, id];
      
      // Auto advance to next level if available
      const nextLevelId = id + 1;
      const nextLevelExists = LEVELS.some(l => l.id === nextLevelId);
      
      return {
        completedLevels: newCompleted,
        currentLevelId: nextLevelExists ? nextLevelId : id // Stay on last level if finished all
      };
    });
  };

  return (
    <div className="flex h-screen w-full bg-slate-100 font-sans text-slate-900">
      <Sidebar 
        progress={progress} 
        onSelectLevel={handleLevelSelect} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <LevelView 
        level={currentLevel} 
        onLevelComplete={handleLevelComplete}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
    </div>
  );
}

export default App;