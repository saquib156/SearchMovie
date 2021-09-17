import React, { useState, useEffect } from "react";

const ClockTimer = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <>
      <h1>Current Time:</h1>
      <h1>{date.toLocaleTimeString()}</h1>
    </>
  );
};

export default ClockTimer;