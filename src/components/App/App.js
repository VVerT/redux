import React from 'react';
import './App.css';
import CounterContainer from "../../containers/CounterContainer";
import MainContainer from "../../containers/MainContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <MainContainer />
    </div>
  );
}

export default App;
