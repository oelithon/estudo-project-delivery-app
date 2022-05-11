import React from 'react';
import Content from './components/Content';
import './App.css';
import './styles/global.css';
import { Navbar } from './components';

function App() {
  const usertype = 'client';
  const username = 'Rafael';

  return (
    <div>
      <Navbar usertype={ usertype } username={ username } />
      <Content />
    </div>
  );
}

export default App;
