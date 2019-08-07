import React from 'react';
import ReactDOM from 'react-dom';
import FormikFormComponent from './components/FormComponent'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FormikFormComponent />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)

export default App;
