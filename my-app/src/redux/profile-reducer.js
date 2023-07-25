const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hello. How are you?", like: 2 },
    { id: 2, message: "HI! I am fine!", like: 5 },
  ],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        like: 1,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    default:
      return state;

  }
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

export default profileReducer;
