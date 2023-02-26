import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeVolume } from '../app/slices/volumeSlice';

const MachineSettings = props => {
  const dispatch = useDispatch();
  const minVolume = useSelector((state) => state.volume.value.minVolume);
  const maxVolume = useSelector((state) => state.volume.value.maxVolume);
  const initialVolumeStep = 5;
  const volumeSteps = 10;
  const handleChange = (event) => {
    dispatch(changeVolume({
      volType: "current",
      newVolume: event.target.value / 100
    }));
  }
  const volumeSetting = (
    <label for="volume-setting">
      Volume
      <input
        id="volume-setting"
        type="range"
        min={minVolume * 100}
        max={maxVolume * 100}
        onChange={handleChange}
        step={maxVolume * volumeSteps}
      />
    </label>

  );

  useEffect(() => {
    let volumeSetting = document.getElementById("volume-setting");
    volumeSetting.value = maxVolume * volumeSteps * initialVolumeStep;
    dispatch(changeVolume({
      volType: "current",
      newVolume: document.getElementById("volume-setting").value / 100
    }));
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