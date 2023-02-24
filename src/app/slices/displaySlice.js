const INITIAL_DISPLAY_TEXT = "";
const CHANGE_DISPLAY_TEXT = "change_display_text";
const changeDisplayText = (newText) => {
  return {
    type: CHANGE_DISPLAY_TEXT,
    payload: newText
  }
};
const displayTextReducer = (state = INITIAL_DISPLAY_TEXT, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY_TEXT:
      return action.payload;
    default:
      return state;
  }
}

export { changeDisplayText };
export default displayTextReducer;