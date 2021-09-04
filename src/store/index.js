import { createStore, combineReducers } from "redux";
import navReducer from "./navReducer";
import mapReducer from "./mapReducer";
import routeReducer from "./routeReducer";

const rootReducer = combineReducers({
  navSelection: navReducer,
  mapSelection: mapReducer,
  route: routeReducer
});
const store = createStore(rootReducer);

export default store;
