const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profile: {
      posts: [
        { id: 1, message: "Hello. How are you?", like: 2 },
        { id: 2, message: "HI! I am fine!", like: 5 },
      ],
      newPostText: "",
    },
    messages: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Cool!" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("state");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profile.newPostText,
        like: 1,
      };
      this._state.profile.posts.push(newPost);
      this._state.profile.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profile.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 3,
        message: this._state.messages.newMessageText,
      };
      this._state.messages.messages.push(newMessage);
      this._state.messages.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messages.newMessageText = action.message;
      this._callSubscriber(this._state);
    }
  },
};

export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export let updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text,
  };
};

export let addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export let updateNewMessageTextActionCreator = (message) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    message: message,
  };
};

export default store;
window.store = store;
