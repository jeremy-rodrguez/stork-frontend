export const initialState = {
  emailInput: "",
  passwordInput: "",
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
    default:
      return state;
  }
};
