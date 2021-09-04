const initialState = {
  routesList: [],
  viewCreateForm: false,
  stopsList: [],
  viewEditForm: false,
  route: {},
  sendRequest: true,
  deleteRoute: false
};
const routeReducer = (state = initialState, action) => {
  if (action.type === "setRoutes") {
    return { ...state, routesList: action.payLoad };
  }
  if (action.type === "setStops") {
    return { ...state, stopsList: action.payLoad };
  }
  if (action.type === "createRoute") {
    return { ...state, viewCreateForm: true };
  }
  if (action.type === "deleteRoute") {
    return { ...state, deleteRoute: true, route: action.payLoad };
  }
  if (action.type === "fetchRoutes") {
    return { ...state, sendRequest: !state.sendRequest };
  }
  if (action.type === "editRoute") {
    return { ...state, viewEditForm: true, route: action.payLoad };
  }
  if (action.type === "closeEditRoute") {
    return { ...state, viewEditForm: false };
  }
  if (action.type === "closeCreateRoute") {
    return { ...state, viewCreateForm: false };
  }
  if (action.type === "closeDeleteRoute") {
    return { ...state, deleteRoute: false };
  }
  return state;
};
export default routeReducer;
