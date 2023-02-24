const INITIAL_VOLUME_SETTINGS = {
  minVolume: 0,
  maxVolume: .25,
  currentVolume: 0
};
const CHANGE_MIN_VOLUME = "change_min_volume";
const CHANGE_MAX_VOLUME = "change_max_volume";
const CHANGE_CURRENT_VOLUME = "change_current_volume";
const changeMinVolume = (newVolume) => {
  return {
    type: CHANGE_MIN_VOLUME,
    payload: newVolume,
  }
}
const changeMaxVolume = (newVolume) => {
  return {
    type: CHANGE_MAX_VOLUME,
    payload: newVolume,
  }
}
const changeCurrentVolume = (newVolume) => {
  return {
    type: CHANGE_CURRENT_VOLUME,
    payload: newVolume,
  }
}
const changeVolume = (volType, newVolume) => {
  switch (volType) {
    case "min":
      return changeMinVolume(newVolume);
    case "max":
      return changeMaxVolume(newVolume);
    case "current":
      return changeCurrentVolume(newVolume);
  }
};
const volumeReducer = (state = INITIAL_VOLUME_SETTINGS, action) => {
  switch (action.type) {
    case CHANGE_MIN_VOLUME:
      return {
        ...state,
        minVolume: action.payload
      }
    case CHANGE_MAX_VOLUME:
      return {
        ...state,
        maxVolume: action.payload
      }
    case CHANGE_CURRENT_VOLUME:
      return {
        ...state,
        currentVolume: action.payload
      }
    default:
      return state;
  }
}

export { changeMinVolume, changeMaxVolume, changeCurrentVolume, changeVolume };
export default volumeReducer;