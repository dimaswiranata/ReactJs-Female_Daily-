import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Screen__Landing from "./screens/Screen__Landing";
import Screen__Example from "./screens/Screen__Example";

function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={Screen__Landing}/>
        <Route exact path='/example' component={Screen__Example}/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
