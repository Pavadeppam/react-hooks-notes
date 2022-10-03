import { useState } from 'react';

const ArrayStateWithUseStateHook = () => {
  const [num, setNum] = useState([]);

  const handleCounter = () => {
    setNum([...num, num.length + 1]);
    console.log(num);
  };

  return (
    <div>
      <button onClick={handleCounter}>Counter</button>
      <ul>
        {num.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayStateWithUseStateHook;
