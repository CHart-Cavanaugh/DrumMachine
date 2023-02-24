import PowerBtn from './PowerBtn';
import MachineSettings from './MachineSettings';
import MachineDisplay from './MachineDisplay';
import DrumPadBtns from './DrumPadBtns';

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

export default DrumMachine;