import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likeCount: 10, message: "Post1"},
                {id: 2, likeCount: 20, message: "Post2"},
                {id: 3, likeCount: 40, message: "Post4"}
              ],
            newPostText: "YYYY"
        },
    
        dialogPage: {
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
    },
    _callSubscriber() {
    
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;