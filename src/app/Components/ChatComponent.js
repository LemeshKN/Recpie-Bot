'use client'
import Chatbot from "react-chatbot-kit"; 
// import 'react-chatbot-kit/build/main.css'
import "../custom-chatbot-styles.css";
import config from "../config";
import ActionProvider from "../Actionprovider";
import MessageParser from "../MessageParser";

const ChatComponent = () => {
    return (
        <div >
        <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        placeholder="Search"
        />
        </div>
        

    )
}

export default ChatComponent;
