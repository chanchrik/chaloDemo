const initialState = {
  viewMap: false,
  routesStopsList: [],
  route: {},
  mapBounds: null
};
const mapReducer = (state = initialState, action) => {
  if (action.type === "viewMap") {
    return {
      ...state,
      viewMap: true,
      ...action.payLoad
    };
  }
  if (action.type === "closeMap") {
    return {
      ...state,
      viewMap: false,
      route: {},
      routesStopsList: []
    };
  }
  if (action.type === "loadMap") {
    return { ...state };
  }
  return state;
};
export default mapReducer;
