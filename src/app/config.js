import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'Recipe Bot 🤖 - Your Personal Cooking Assistant!',
    initialMessages: [
        createChatBotMessage("Hi! I'm your Recipe Bot 🤖,Tell me the dish you want to make, and I'll guide you step-by-step! 🍽️")
    ]
}

export default config;