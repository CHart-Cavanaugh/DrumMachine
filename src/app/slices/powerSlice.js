const INITIAL_POWER_STATUS = "on";
const TOGGLE_POWER = "toggle_power"
const POWER_OFF = "power_off";
const POWER_ON = "power_on";
const powerOff = () => {
  return {
    type: POWER_OFF,
    payload: "off"
  }
};
const powerOn = () => {
  return {
    type: POWER_ON,
    payload: "on"
  }
};
const togglePower = (currentPower) => {
  switch (currentPower) {
    case "off":
      return powerOn();
    case "on":
      return powerOff();
  }
}
const powerStatusReducer = (state = INITIAL_POWER_STATUS, action) => {
  switch (action.type) {
    case POWER_OFF:
      return action.payload
    case POWER_ON:
      return action.payload
    default:
      return state;
  }
}

export { powerOff, powerOn, togglePower };

export default powerStatusReducer;