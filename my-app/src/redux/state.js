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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 3,
        message: this._state.profile.newPostText,
        like: 1,
      };
      this._state.profile.posts.push(newPost);
      this._state.profile.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profile.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 3,
        message: this._state.messages.newMessageText,
      };
      this._state.messages.messages.push(newMessage);
      this._state.messages.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.messages.newMessageText = action.message;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
