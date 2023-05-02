import { useHistory, useState, useEffect } from 'react'
import {BrowserRouter  as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Login from "./components/Login"

// Tasks;
//   1. import context component

// import Login from "./components/Login"

// import Chats from "./components/Chats"

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
