export const initialState = {
  nameInput: "",
  emailInput: "",
  passwordInput: "",
  items: [],
  favorites: [],
  user: null,
  checkout: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return {
        ...state,
        nameInput: action.value,
      };
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
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.favorites,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CHECKOUT":
      return {
        ...state,
        checkout: [...state.checkout, action.checkout],
      };
    default:
      return state;
  }
};
