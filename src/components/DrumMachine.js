import PowerBtn from './PowerBtn';
import MachineSettings from './MachineSettings';
import MachineDisplay from './MachineDisplay';
import DrumPadBtns from './DrumPadBtns';

const DrumMachine = props => {
  return (

    <div id="drum-machine">
      <div id="machine-column-left">
        <PowerBtn />
        <MachineSettings />
      </div>
      <div id="machine-column-right">
        <MachineDisplay />
        <DrumPadBtns />
      </div>
    </div>

  );

}

export default DrumMachine;