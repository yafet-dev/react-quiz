import { useEffect } from "react";
function Timer({ dispatch, secondsremaining }) {
  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );
  return <div className="timer">{secondsremaining}</div>;
}

export default Timer;
