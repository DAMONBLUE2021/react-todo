import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${meridiem}`;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;


/*
body{
    background-image: url(assets/down.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin: 0;

    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
}

.clock-container{
    
    width:100vw;
    padding: 10px 0;

}

.clock{
    color: white;
    font-size: 6rem;
    font-weight: bold;
    font-family:monospace;
    text-shadow: 3px 3px 5px hsla(0, 0%, 0%, 75%);
    text-align: center;
}
*/