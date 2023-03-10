import { createSlice } from "@reduxjs/toolkit";



const MACHINE_BTN_KEYBINDS = [
  "Q", "W", "E",
  "A", "S", "D",
  "Z", "X", "C",
]
const INITIAL_AUDIO_BINDINGS = [
  //Button: [Key, Audio_Source, Audio_Name]
  //Button 1 
  [MACHINE_BTN_KEYBINDS[0], "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "Heater 1"],

  //Button 2
  [MACHINE_BTN_KEYBINDS[1], "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", "Heater 2"],

  //Button 3
  [MACHINE_BTN_KEYBINDS[2], "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", "Heater 3"],

  //Button 4
  [MACHINE_BTN_KEYBINDS[3], "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", "Heater 4"],

  //Button 5
  [MACHINE_BTN_KEYBINDS[4], "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "Clap"],

  //Button 6
  [MACHINE_BTN_KEYBINDS[5], "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "Open-HH"],

  //Button 7
  [MACHINE_BTN_KEYBINDS[6], "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", "Kick-n'-Hat"],

  //Button 8
  [MACHINE_BTN_KEYBINDS[7], "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "Kick"],

  //Button 9
  [MACHINE_BTN_KEYBINDS[8], "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", "Closed-HH"],
];
const audioBindingsSlice = createSlice({
  name: 'audioBindings',
  initialState: {
    value: [...INITIAL_AUDIO_BINDINGS]
  },
  reducers: {
    changeAudioBinding: (state, action) => {
      state.value[action.payload.btnNum][1] = action.payload.audio[0];
      state.value[action.payload.btnNum][2] = action.payload.audio[1];
    }
  }
});



export const { changeAudioBinding } = audioBindingsSlice.actions;
export default audioBindingsSlice.reducer;