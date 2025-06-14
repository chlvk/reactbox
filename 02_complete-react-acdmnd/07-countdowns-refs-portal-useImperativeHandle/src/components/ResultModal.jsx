import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// forwardRef is used for the React version earlier than v19
// v19 allows to use ref as an usual prop: ({result, targetTime, ref}) => {}
const ResultModal = forwardRef(
  ({ remainingTime, targetTime, onReset }, ref) => {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          // standard browser api
          dialog.current.showModal();
        },
      };
    });

    // the portal created with createPortal outputs the dialog in the element with id="modal" placed directly in <body>, separated from the rest of content
    return createPortal(
      <dialog className="result-modal" ref={dialog}>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your score: {score} points</h2>}
        <p>
          The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button type="submit">Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;
