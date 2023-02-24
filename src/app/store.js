import { legacy_createStore, combineReducers } from "redux";
import powerStatusReducer from "./slices/powerSlice";
import displayTextReducer from "./slices/displaySlice";
import volumeReducer from "./slices/volumeSlice";
import audioBindingReducer from "./slices/audioBindingSlice";


const rootReducer = combineReducers({
  powerStatus: powerStatusReducer,
  displayText: displayTextReducer,
  volume: volumeReducer,
  audioBindings: audioBindingReducer,
});
const store = legacy_createStore(rootReducer);

export default store;