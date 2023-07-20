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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state");
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profile.newPostText,
      like: 1,
    };
    this._state.profile.posts.push(newPost);
    this._state.profile.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(text) {
    this._state.profile.newPostText = text;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 3,
      message: this._state.messages.newMessageText,
    };
    this._state.messages.messages.push(newMessage);
    this._state.messages.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(message) {
    this._state.messages.newMessageText = message;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
