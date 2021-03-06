const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Irina"},
        {id: 3, name: "Valery"},
        {id: 4, name: "Olga"},
      ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hi is Yo"},
        {id: 3, message: "Hello"},
      ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        return {
            ...state,
            newMessageBody: action.body
        }
    }
    else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id: 4, message: body}] 
        }
    }
    
    return state;
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default dialogsReducer;