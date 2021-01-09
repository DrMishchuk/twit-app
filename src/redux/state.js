let rerenderEntireTree = () => {
    
}

let state = {
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
          ]
    }
}

export let addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        likeCount: 5,
        message: state.profilePage.newPostText
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;