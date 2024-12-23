import { useRef, useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStart(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lose!</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStart ? handleStop : handleStart}>
          {timerStart ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStart ? "active" : undefined}>
        {timerStart ? "Time is running" : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
