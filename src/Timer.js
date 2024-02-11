import { useEffect } from "react";
function Timer({ dispatch, secondsremaining }) {
  const mins = Math.floor(secondsremaining / 60);
  const seconds = secondsremaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins}:{seconds}
    </div>
  );
}

export default Timer;
