const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 3,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.message;
      return state;
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
