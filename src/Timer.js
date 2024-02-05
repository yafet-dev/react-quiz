import { useEffect } from "react";
function Timer({ dispatch }) {
  useEffect(
    function () {
      setInterval(function () {}, 1000);
    },
    [dispatch]
  );
  return <div className="timer">05:00</div>;
}

export default Timer;
