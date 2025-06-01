import React from 'react';
import './App.css';

// This is our main App component with TypeScript
const App: React.FC = () => {
  // React.FC means "Function Component" - this tells TypeScript
  // this is a React component that returns JSX

  return (
    <div className="App">
      <header style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>🏢 CRM Dashboard</h1>
        <p>Building with React + TypeScript for HubSpot</p>

        <div style={{
          background: '#f8f9fa',
          padding: '1rem',
          borderRadius: '8px',
          margin: '1rem auto',
          maxWidth: '500px'
        }}>
          <h3>📋 Project Roadmap:</h3>
          <ul style={{ textAlign: 'left' }}>
            <li>✅ Project Setup (You're here!)</li>
            <li>🔄 Contact Management System</li>
            <li>⏳ Deal Pipeline Interface</li>
            <li>⏳ Analytics Dashboard</li>
            <li>⏳ Advanced TypeScript Patterns</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;