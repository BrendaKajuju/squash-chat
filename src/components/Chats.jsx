import React from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../components/Firebase";

const Chats = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        
        navigate.push('/');
    }

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Squash-Chat
                </div>
                  <div onClick={handleLogout} className="Logout-tab">
                    Logout
                  </div>
            </div>


            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="b69d4304-d14a-49fb-a0ba-eaa0f17faaae"
                userName="."
                userSecret="."
            />
        </div>
    );
}

export default Chats;