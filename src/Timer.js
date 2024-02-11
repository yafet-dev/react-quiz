import { useEffect } from "react";
function Timer({ dispatch, secondsremaining }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return <div className="timer">{secondsremaining}</div>;
}

export default Timer;
