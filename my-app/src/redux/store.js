import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

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
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = dialogsReducer(this._state.messages, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
