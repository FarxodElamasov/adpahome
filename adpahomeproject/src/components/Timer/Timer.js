import React, { useEffect, useState } from "react";

export default function Timer() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
        <p
          sx={{
                  color: "white",
              marginLeft: "1000px"
          }}>
          {date.toDateString()}
        </p>
        <p
          sx={{
            color: "white",
          }}>
          {date.toLocaleTimeString()}
        </p>
    </>
  );
}
