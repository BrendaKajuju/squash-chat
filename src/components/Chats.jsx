import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../components/Firebase";
import { useAuth } from "../context/AuthenticationContext"
import axios from "axios";

const Chats = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await auth.signOut();
        
        navigate.push('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' })
    }


    useEffect(() => {
        if(!user) {
            navigate.push('/');

            return;
        }

         axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "8a0d44dd-97eb-426b-8a66-8e0a3ba12167",
                "user-name": user.email,
                "user-secret": user.uid,
            }
         })
         .then(() => {
            setLoading(false);
         })
         .catch(() => {
            let formdata = new FormData()
            formdata.append('email', user.email);
            formdata.append('username', user.displayName);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name);

                    axios.post('https://api/chatengine.io/users',
                    formdata,
                    { headers: { "private-key": "ae6128cc-c543-481d-be3d-a7cfd1a0ed2a" } }
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                })
         })
    },  [user, navigate]);

    if(!user || loading) return 'Loading...';

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Squash-Chat
                </div>
                  <div className="logout-tab" onClick={handleLogout}>
                    Logout
                  </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="8a0d44dd-97eb-426b-8a66-8e0a3ba12167"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
}

export default Chats;