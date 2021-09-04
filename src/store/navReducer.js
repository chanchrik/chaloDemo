const initialState = {
  navItem: "Routes"
};
const navReducer = (state = initialState, action) => {
  if (action.type === "updateNav") {
    return { ...state, navItem: action.payLoad };
  }
  return state;
};
export default navReducer;
