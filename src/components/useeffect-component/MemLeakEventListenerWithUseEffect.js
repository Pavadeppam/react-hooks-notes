import React, { useState } from 'react';
import AddEventListenerWithUseEffect from './AddEventListenerWithUseEffect';

function MemLeakEventListerWithUseEffect() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggles</button>
      {display && <AddEventListenerWithUseEffect />}
    </div>
  );
}

export default MemLeakEventListerWithUseEffect;
