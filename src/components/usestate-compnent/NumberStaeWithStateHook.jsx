import { useState } from 'react';

const NumberStateWithStateHook = () => {
  const [count, setCount] = useState(0);

  const handleIncrement5 = () => {
    console.log('heloo');
    debugger;
    for (let i = 0; i < 5; i++) {
      //setCount(count + 1); // this has issue has it doesnt have access to prevstate
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count ? count - 1 : 0)}>Decrement</button>
      <button onClick={handleIncrement5}>Increment5</button>
      <button onClick={() => setCount(0)}>Refresh</button>
    </div>
  );
};

export default NumberStateWithStateHook;
