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
};

export default PowerBtn;