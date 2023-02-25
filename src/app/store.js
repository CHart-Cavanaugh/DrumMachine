import { configureStore } from "@reduxjs/toolkit";
import powerStatusReducer from "./slices/powerSlice";
import displayTextReducer from "./slices/displaySlice";
import volumeReducer from "./slices/volumeSlice";
import audioBindingReducer from "./slices/audioBindingSlice";



const store = configureStore({
  reducer: {
    powerStatus: powerStatusReducer,
    displayText: displayTextReducer,
    volume: volumeReducer,
    audioBindings: audioBindingReducer,
  }
});



export default store;