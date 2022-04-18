
import React from 'react';
import './App.css';
import { DateView } from './components/Date/DateView';
import { Greeting } from './components/Greeting/Greeting';

export const App = () => {
  return (
    <div className="App" aria-label='App'>
      <Greeting/>
      <DateView/>
    </div>
  );
}
