import { useEffect, useState } from 'react';

const TitleSettingWithUseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    document.title = `Counter clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  );
};

export default TitleSettingWithUseEffectHook;
