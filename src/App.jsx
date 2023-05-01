import { useHistory, useState, useEffect } from 'react'
import {BrowserRouter  as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Login from "./components/Login"

// Tasks;
//   1. import context component
//   2. import login component
//   3. import chat component

function App() {
  return (
 <div>
  <Router>
    <switch>
      {/* //render either one of the components below */}
      <Route path="/" component={Login} />
    </switch>

  </Router>
 </div>
  )
}

export default App;
