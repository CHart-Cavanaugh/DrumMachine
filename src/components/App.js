import DrumMachine from "./DrumMachine";

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
};

export default App;