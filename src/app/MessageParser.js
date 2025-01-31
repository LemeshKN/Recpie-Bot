class MessageParser {
    constructor(actionProvider,state){
        this.actionProvider = actionProvider;
        this.sate = state ;
    }

    parse = (message) => {
        this.actionProvider.respond(message);
    }
}

export default MessageParser;