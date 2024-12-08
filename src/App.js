import React from 'react';
import ContactList from './components/ContactList';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Contacts</h1>
      </header>
      <main>
        <ContactList />
      </main>
    </div>
  );
};

export default App;
