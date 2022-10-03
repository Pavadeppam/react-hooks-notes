import { useEffect, useState } from 'react';

const AddEventListenerWithUseEffect = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMoousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    document.addEventListener('mousemove', logMoousePosition);
    console.log('Inside listener');
    // return () => {
    //   document.removeEventListener('mousemove', logMoousePosition);
    // };
  }, []);

  return (
    <div>
      <h3>Position X: {x}</h3>
      <h3>Position Y: {y}</h3>
    </div>
  );
};

export default AddEventListenerWithUseEffect;
