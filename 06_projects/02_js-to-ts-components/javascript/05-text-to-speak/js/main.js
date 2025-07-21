const textNode = document.querySelector("#text");
const speakButtonNode = document.querySelector("#speak");

const onSpeakButtonClick = () => {
  window.speechSynthesis.cancel();

  const text = textNode.value;
  const utterance = new SpeechSynthesisUtterance(text);
  // Working in Firefox, not working in Chrome
  window.speechSynthesis.speak(utterance);
};

speakButtonNode.addEventListener("click", onSpeakButtonClick);
