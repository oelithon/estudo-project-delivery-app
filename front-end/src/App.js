import React from 'react';
import Content from './components/Content';
import { Navbar } from './components';
import './App.css';
import './styles/global.css';

const usertype = 'client';
const username = 'Rafael';

function App() {
  return (
    <div>
      <Navbar usertype={ usertype } username={ username } />
      <Content />
    </div>
  );
}

export default App;
