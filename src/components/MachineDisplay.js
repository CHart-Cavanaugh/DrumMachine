import { useSelector } from 'react-redux';

const MachineDisplay = props => {
  const displayText = useSelector((state) => state.displayText.value);

  return (
    <div id="display">{displayText}</div>
  );
}

export default MachineDisplay;