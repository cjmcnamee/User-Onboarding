import React from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './components/FormComponent'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FormComponent />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)

export default App;
