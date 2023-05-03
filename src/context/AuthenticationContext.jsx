import React, {useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../components/Firebase";

const AuthenticationContext = React.createContext();
export const useAuth = () => useContext(AuthenticationContext);

export const AuthenticationProvider = ({ children }) => {
 const [loading, setLoading] = useState(true);
 const [user, setUser] = useState (null)
 const navigate = useNavigate();

 useEffect(() => {
    auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
        if (user) navigate('/chats')
    })
 }, [user, navigate]);

const value = { user };
return (
    <AuthenticationContext.Provider value={value}>
        {/* Show children components when not loading */}
        {!loading && children}
    </AuthenticationContext.Provider>
)};
  export default AuthenticationContext ;