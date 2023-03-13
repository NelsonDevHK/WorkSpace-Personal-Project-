import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(45 * 60); // set the timer to 45 minutes
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [switchTo45Mins, setSwitchTo45Mins] = useState(false);
  const [displayText,setDisplayText] = useState('Working Period') // false == working
  const [className,setClassName] = useState('work-Text') // false == working
  useEffect(() => {
    if (secondsLeft === 0) {
      setCountdownComplete(!countdownComplete);
    if(switchTo45Mins == true){
      setDisplayText('Working Period');
      setClassName('work-Text');
    }
    else{
      setDisplayText('Working Break');
      setClassName('break-Text');
    }
    }

    const countdownInterval = setInterval(() => {
      setSecondsLeft(prevSeconds => {
        if (prevSeconds === 0) {
          setCountdownComplete(true);
          if (switchTo45Mins) {
            setSwitchTo45Mins(false);
            return 45 * 60; // switch back to 45 minutes
          } else {
            setSwitchTo45Mins(true);
            return 15 * 60; // set the timer to 15 minutes after the first 45 minutes
          }
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    // cleanup function to clear interval on unmount
    return () => clearInterval(countdownInterval);
  }, [secondsLeft, switchTo45Mins]);

  const minutesLeft = Math.floor(secondsLeft / 60);
  const secondsDisplay = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className={className}>
      <h1 className='Text'>
        Countdown Timer
      </h1>
      <h1>
      {minutesLeft}:{secondsDisplay}{' '}
      </h1>
      <h1>
      {displayText}{' '}
      </h1>
    </div>
  );
}

export default CountdownTimer;
