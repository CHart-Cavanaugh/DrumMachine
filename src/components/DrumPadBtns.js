import { useEffect } from "react";

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



  useEffect(() => {

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    }

  }, [props.powerStatus]);

  useEffect(() => {
    const btns = document.getElementsByClassName("drum-pad");

    if (props.powerStatus === "off")
      for (let i = 0; i < btns.length; i++)
        btns[i].className = "drum-pad " + "btn-off";
    else
      for (let i = 0; i < btns.length; i++)
        btns[i].className = "drum-pad " + "btn-on-idle";

  }, [props.powerStatus]);

  useEffect(() => {
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
};

export default DrumPadBtns;