const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 3, message: state.newMessageText}],
        newMessageText: "",
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.message,
      };
    default:
      return state;
  }
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

export default dialogsReducer;
