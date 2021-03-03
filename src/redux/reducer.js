export const initialState = {
  emailInput: "",
  passwordInput: "",
  items: [],
  favorites: [],
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USER_INPUT": // Type
      return {
        ...state,
        emailInput: action.value, // Value
      };
    case "CHANGE_USER_PASSWORD":
      return {
        ...state,
        passwordInput: action.value,
      };
    case "SET_ITEMS":
      return {
        ...state,
        items: action.popcorn,
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.favorite],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
