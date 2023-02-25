import { createSlice } from "@reduxjs/toolkit";



const INITIAL_VOLUME_SETTINGS = {
  minVolume: 0,
  maxVolume: .25,
  currentVolume: 0
};
const volumeSlice = createSlice({
  name: 'volume',
  initialState: {
    value: { ...INITIAL_VOLUME_SETTINGS }
  },
  reducers: {

    changeMinVolume: (state, action) => {
      state.value.minVolume = action.payload;
    },

    changeMaxVolume: (state, action) => {
      state.value.maxVolume = action.payload;
    },

    changeCurrentVolume: (state, action) => {
      state.value.currentVolume = action.payload;
    },

    changeVolume: (state, action) => {
      switch (action.payload.volType) {
        case "min":
          state.value.minVolume = action.payload.newVolume;
          break;
        case "max":
          state.value.maxVolume = action.payload.newVolume;
          break;
        case "current":
          state.value.currentVolume = action.payload.newVolume;
          break;
      }
    }

  }
});



export const { changeMinVolume, changeMaxVolume, changeCurrentVolume, changeVolume } = volumeSlice.actions;
export default volumeSlice.reducer;