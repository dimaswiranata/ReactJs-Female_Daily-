import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Screen__Landing from "./screens/Screen__Landing";

function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={Screen__Landing}/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
