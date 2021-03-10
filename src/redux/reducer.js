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
    case "SET_CHECKOUT":
      return {
        ...state,
        checkout: [...state.checkout, action.addedToCheckout],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        checkout: state.checkout.filter((item) => item.id !== action.item.id),
      };
    case "REMOVE_CHECKOUT":
      return {
        ...state,
        checkout: [],
      };
    default:
      return state;
  }
};
