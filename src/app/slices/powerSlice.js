import { createSlice } from "@reduxjs/toolkit";



const INITIAL_POWER_STATUS = "on";
const powerSlice = createSlice({
  name: 'powerStatus',
  initialState: {
    value: INITIAL_POWER_STATUS
  },
  reducers: {

    powerOff: (state) => {
      state.value = "off";
    },

    powerOn: (state) => {
      state.value = "on"
    },

    togglePower: (state, action) => {
      switch (action.payload) {
        case "on":
          state.value = "off";
          break;
        case "off":
          state.value = "on";
          break;
      }
    }

  }
});



export const { powerOff, powerOn, togglePower } = powerSlice.actions;
export default powerSlice.reducer;