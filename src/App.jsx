import {BrowserRouter  as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { AuthenticationProvider } from './context/AuthenticationContext'
import Login from "./components/Login"
import Chats from "./components/Chats"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthenticationProvider>
          <Routes>
            {/* Render either one of the components below */}
            <Route path="/" element={<Login />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </AuthenticationProvider>
      </Router>
    </div>
  )
}

export default App;

// With this configuration, the Login component will be rendered on the root route ("/") and the Chats component will be rendered on the "/chats" route. You can then use useNavigate hook to navigate between the routes in your components.
