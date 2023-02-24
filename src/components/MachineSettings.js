import { useEffect } from "react";

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

  useEffect(() => {
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
};

export default MachineSettings;