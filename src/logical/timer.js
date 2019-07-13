import React, { useEffect, useState } from "react";
import { Timer } from "../ui";

const TimerComponent = props => {
  const { onTimerCompleted, isRunning } = props;
  const [isCompleted, setIsCompleted] = useState(false);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [tempSeconds, setTempSeconds] = useState(props.seconds * 1000);
  const [startedTime, setStartedTime] = useState(new Date());

  useEffect(() => {
    const sec = props.seconds % 60;
    const min = Math.floor(props.seconds / 60);
    setSeconds(sec < 10 ? `0${sec}` : `${sec}`);
    setMinutes(min < 10 ? `0${min}` : `${min}`);
    setStartedTime(new Date());
  }, [props.seconds]);

  const doTheTimer = () => {
    setTimeout(() => {
      const newSeconds = props.seconds * 1000 - (new Date() - startedTime);
      if (newSeconds >= 0 && newSeconds < tempSeconds) {
        if (Math.floor(newSeconds / 1000) === 0) {
          setIsCompleted(true);
          onTimerCompleted();
        }
        setTempSeconds(newSeconds);
        const sec = Math.floor(newSeconds / 1000) % 60;
        const min = Math.floor(Math.floor(newSeconds / 1000) / 60);
        setSeconds(sec < 10 ? `0${sec}` : `${sec}`);
        setMinutes(min < 10 ? `0${min}` : `${min}`);
      }
    }, 50);
  };
  useEffect(() => {
    if (isRunning) {
      doTheTimer();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempSeconds, isRunning]);

  return (
    <Timer minutes={minutes} seconds={seconds} isCompleted={isCompleted} />
  );
};

export default TimerComponent;
