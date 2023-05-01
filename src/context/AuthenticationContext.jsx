import React, {useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from "../components/Firebase/auth";

const AuthenticationContext = React.createContext();
export const useAuth = () => useContext(AuthenticationContext);

export const AuthenticationProvider = ({ children }) => {
 const [loading, setLoading] = useState(true);
 const [user, setUser] = useState ({})
 const history = useHistory();

 useEffect(() => {
    auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
        history.push('/chats')
    })
 }, [user, history]);

const value = { user };
return (
    <AuthenticationContext.Provider value={value}>
        {/* Show children components when not loading */}
    </AuthenticationContext.Provider>
)};