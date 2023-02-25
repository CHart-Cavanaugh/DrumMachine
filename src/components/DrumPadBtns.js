import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDisplayText } from "../app/slices/displaySlice";

const DrumPadBtns = props => {
  const powerStatus = useSelector((state) => state.powerStatus.value);
  const currentVolume = useSelector((state) => state.volume.value.currentVolume);
  const audioBindings = useSelector((state) => state.audioBindings.value);
  const dispatch = useDispatch();


  function playAudio(btnKey) {

    if (document.getElementsByClassName("drum-pad btn-on-focus").length === 1)
      document.getElementsByClassName("drum-pad btn-on-focus")[0].className = "drum-pad btn-on-idle";

    document.getElementById(btnKey + "-btn").className = "drum-pad btn-on-focus";
    document.getElementById(btnKey).load();
    document.getElementById(btnKey).play();
  }
  function setDisplay(btnKey) {
    switch (btnKey) {
      case audioBindings[0][0]:
        dispatch(changeDisplayText(audioBindings[0][2]));
        break;
      case audioBindings[1][0]:
        dispatch(changeDisplayText(audioBindings[1][2]));
        break;
      case audioBindings[2][0]:
        dispatch(changeDisplayText(audioBindings[2][2]));
        break;
      case audioBindings[3][0]:
        dispatch(changeDisplayText(audioBindings[3][2]));
        break;
      case audioBindings[4][0]:
        dispatch(changeDisplayText(audioBindings[4][2]));
        break;
      case audioBindings[5][0]:
        dispatch(changeDisplayText(audioBindings[5][2]));
        break;
      case audioBindings[6][0]:
        dispatch(changeDisplayText(audioBindings[6][2]));
        break;
      case audioBindings[7][0]:
        dispatch(changeDisplayText(audioBindings[7][2]));
        break;
      case audioBindings[8][0]:
        dispatch(changeDisplayText(audioBindings[8][2]));
        break;

    }

  }
  function handleClick(btnKey) {
    if (powerStatus === "on") {
      playAudio(btnKey);
      setDisplay(btnKey);
    }
  }
  function handleKeyPress(event) {
    const btnKey = event.key.toUpperCase();

    if (audioBindings.some(audioBinding => btnKey === audioBinding[0])) {
      handleClick(btnKey);
    }
  }



  useEffect(() => {

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    }

  }, [powerStatus]);

  useEffect(() => {
    const btns = document.getElementsByClassName("drum-pad");

    if (powerStatus === "off")
      for (let i = 0; i < btns.length; i++)
        btns[i].className = "drum-pad " + "btn-off";
    else
      for (let i = 0; i < btns.length; i++)
        btns[i].className = "drum-pad " + "btn-on-idle";

  }, [powerStatus]);

  useEffect(() => {
    const btns = document.getElementsByTagName("audio");

    for (let i = 0; i < btns.length; i++)
      btns[i].volume = currentVolume;
  }, [currentVolume]);



  return (
    <div id="drum-pad-btns">

      {audioBindings.map((audioBinding) => {

        const [btnKey, audioSrc] = audioBinding;

        return (
          <button
            id={btnKey + "-btn"}
            class={`drum-pad btn-${powerStatus}-idle`}
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
};

export default DrumPadBtns;