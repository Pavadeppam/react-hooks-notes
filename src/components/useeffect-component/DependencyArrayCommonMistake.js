import React, { useEffect, useState } from 'react';

function DependencyArrayCommonMistake() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // console.log(count);
    if (count === 20) alert('alert');
  }, [count]);
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    // console.log(count);
    // if (count === 20) alert('alert');
    return () => {
      clearInterval(interval);
    };
  }, []);
  //   }, [count]);
  return <div>{count}</div>;
}

export default DependencyArrayCommonMistake;
