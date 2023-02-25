import { createSlice } from "@reduxjs/toolkit";



const INITIAL_DISPLAY_TEXT = "";
const displaySlice = createSlice({
  name: 'displayText',
  initialState: {
    value: INITIAL_DISPLAY_TEXT
  },
  reducers: {
    changeDisplayText: (state, action) => {
      state.value = action.payload;
    }
  }
});



export const { changeDisplayText } = displaySlice.actions;
export default displaySlice.reducer;