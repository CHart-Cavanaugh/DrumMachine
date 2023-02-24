//REDUX STATE LOGIC
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
const CHANGE_AUDIO_BINDING = "CHANGE_AUDIO_BINDING";
const changeAudioBinding = (btnNum, newAudio) => {
  return {
    type: CHANGE_AUDIO_BINDING,
    payload: {
      btnNum: btnNum,
      newAudio: newAudio,
    }
  }
}
const audioBindingReducer = (state = INITIAL_AUDIO_BINDINGS, action) => {
  let stateCopy = [...state];
  switch (action.type) {
    case "CHANGE_AUDIO_BINDING":
      stateCopy[action.payload.btnNum][1] = action.payload.audio[0];
      stateCopy[action.payload.btnNum][2] = action.payload.audio[1];
      return stateCopy;
    default:
      return state;
  }
}

const rootReducer = Redux.combineReducers({
  powerStatus: powerStatusReducer,
  displayText: displayTextReducer,
  volume: volumeReducer,
  audioBindings: audioBindingReducer,
});
const store = Redux.createStore(rootReducer);



// REACT COMPONENTS
const PowerBtn = props => {
  function handleClick(event) {

    props.togglePower(props.powerStatus);

    if (props.powerStatus === "on")
      props.changeDisplayText("");

  };

  return (
    <button id="machine-power-btn" class={`power-${props.powerStatus}`} onClick={handleClick}>
      <i class={`fa fa-power-off`}></i>
    </button>
  );
  x
}
const MachineSettings = props => {
  const initialVolumeStep = 5;
  const volumeSteps = 10;
  const handleChange = (event) => {
    props.changeVolume("current", event.target.value / 100);
  }
  const volumeSetting = (
    <label for="volume-setting">
      Volume
      <input
        id="volume-setting"
        type="range"
        min={props.minVolume * 100}
        max={props.maxVolume * 100}
        onChange={handleChange}
        step={props.maxVolume * volumeSteps}
      />
    </label>

  );

  React.useEffect(() => {
    let volumeSetting = document.getElementById("volume-setting");
    volumeSetting.value = props.maxVolume * volumeSteps * initialVolumeStep;
    props.changeVolume("current", document.getElementById("volume-setting").value / 100);
  }, []);

  return (
    <form
      id="machine-settings"
      action=""
    >
      {volumeSetting}
    </form>

  );
}
const MachineDisplay = props => {
  return (
    <div id="display">{props.displayText}</div>
  );
}
const DrumPadBtns = props => {

  function playAudio(btnKey) {

    if (document.getElementsByClassName("drum-pad btn-on-focus").length === 1)
      document.getElementsByClassName("drum-pad btn-on-focus")[0].className = "drum-pad btn-on-idle";
    document.getElementById(btnKey + "-btn").className = "drum-pad btn-on-focus";
    document.getElementById(btnKey).load();
    document.getElementById(btnKey).play();
  }
  function setDisplay(btnKey) {
    switch (btnKey) {
      case props.audioBindings[0][0]:
        props.changeDisplayText(props.audioBindings[0][2]);
        break;
      case props.audioBindings[1][0]:
        props.changeDisplayText(props.audioBindings[1][2]);
        break;
      case props.audioBindings[2][0]:
        props.changeDisplayText(props.audioBindings[2][2]);
        break;
      case props.audioBindings[3][0]:
        props.changeDisplayText(props.audioBindings[3][2]);
        break;
      case props.audioBindings[4][0]:
        props.changeDisplayText(props.audioBindings[4][2]);
        break;
      case props.audioBindings[5][0]:
        props.changeDisplayText(props.audioBindings[5][2]);
        break;
      case props.audioBindings[6][0]:
        props.changeDisplayText(props.audioBindings[6][2]);
        break;
      case props.audioBindings[7][0]:
        props.changeDisplayText(props.audioBindings[7][2]);
        break;
      case props.audioBindings[8][0]:
        props.changeDisplayText(props.audioBindings[8][2]);
        break;

    }

  }
  function handleClick(btnKey) {
    if (props.powerStatus === "on") {
      playAudio(btnKey);
      setDisplay(btnKey);
    }
  }
  function handleKeyPress(event) {
    const btnKey = event.key.toUpperCase();

    if (props.audioBindings.some(audioBinding => btnKey === audioBinding[0])) {
      handleClick(btnKey);
    }
  }



  React.useEffect(() => {

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      removeEventListener("keydown", handleKeyPress);
    }

  }, [props.powerStatus]);

  React.useEffect(() => {
    const btns = document.getElementsByClassName("drum-pad");

    if (props.powerStatus === "off")
      for (let i = 0; i < btns.length; i++)
        btns[i].className = "drum-pad " + "btn-off";
    else
      for (let i = 0; i < btns.length; i++)
        btns[i].className = "drum-pad " + "btn-on-idle";

  }, [props.powerStatus]);

  React.useEffect(() => {
    const btns = document.getElementsByTagName("audio");

    for (let i = 0; i < btns.length; i++)
      btns[i].volume = props.currentVolume;
  }, [props.currentVolume]);



  return (
    <div id="drum-pad-btns">

      {props.audioBindings.map((audioBinding) => {

        const [btnKey, audioSrc] = audioBinding;

        return (
          <button
            id={btnKey + "-btn"}
            class={`drum-pad btn-${props.powerStatus}-idle`}
            key={btnKey + "-btn"}
            onClick={() => {
              handleClick(btnKey);
            }}
          >
            {btnKey}
            <audio
              id={btnKey}
              class="clip"
              src={audioSrc}
            ></audio>
          </button>

        );
      })}

    </div>
  );
}
const DrumMachine = props => {
  return (

    <div id="drum-machine">
      <div id="machine-column-left">
        <PowerBtn
          powerStatus={props.appState.powerStatus}
          togglePower={props.togglePower}
          changeDisplayText={props.changeDisplayText}
        />
        <MachineSettings
          changeVolume={props.changeVolume}
          minVolume={props.appState.volume.minVolume}
          maxVolume={props.appState.volume.maxVolume}
        />
      </div>
      <div id="machine-column-right">
        <MachineDisplay
          displayText={props.appState.displayText}
          changeDisplayText={props.changeDisplayText}
        />
        <DrumPadBtns
          powerStatus={props.appState.powerStatus}
          currentVolume={props.appState.volume.currentVolume}
          audioBindings={props.appState.audioBindings}
          changeDisplayText={props.changeDisplayText}
        />
      </div>
    </div>

  );

}
const App = props => {
  return (
    <div id="app-container">
      <DrumMachine
        appState={props.appState}
        togglePower={props.togglePower}
        changeDisplayText={props.changeDisplayText}
        changeVolume={props.changeVolume}
      />
    </div>
  );
}



// REACT/REDUX CONNECTION
const mapStateToProps = (state) => {
  return { appState: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    togglePower: currentPower => {
      dispatch(togglePower(store.getState().powerStatus));
    },
    changeDisplayText: newText => {
      dispatch(changeDisplayText(newText));
    },
    changeVolume: (volType, newVolume) => {
      dispatch(changeVolume(volType, newVolume));
    },
  }
};
const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);



//PAGE SETUP
const AppWrapper = props => {
  return (
    <React.StrictMode>
      <ReactRedux.Provider store={store}>
        <Container />
      </ReactRedux.Provider>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <AppWrapper />
);