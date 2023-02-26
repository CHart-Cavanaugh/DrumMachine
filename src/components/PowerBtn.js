import { useSelector, useDispatch } from "react-redux";
import { togglePower } from '../app/slices/powerSlice'
import { changeDisplayText } from '../app/slices/displaySlice'

const PowerBtn = props => {
  const dispatch = useDispatch();
  const powerStatus = useSelector((state) => state.powerStatus.value);


  function handleClick(event) {

    dispatch(togglePower(powerStatus));

    if (powerStatus === "on")
      dispatch(changeDisplayText(""));

  };

  return (
    <button id="machine-power-btn" class={`power-${powerStatus}`} onClick={handleClick}>
      <i class={`fa fa-power-off`}></i>
    </button>
  );
};

export default PowerBtn;