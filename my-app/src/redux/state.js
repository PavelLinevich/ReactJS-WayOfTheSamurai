import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profile.newPostText,
    like: 1,
  };

  state.profile.posts.push(newPost);
  state.profile.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (text) => {
  state.profile.newPostText = text;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 3,
    message: state.messages.newMessageText,
  };

  state.messages.messages.push(newMessage);
  state.messages.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (message) => {
  state.messages.newMessageText = message;
  rerenderEntireTree(state);
};

export default state;
