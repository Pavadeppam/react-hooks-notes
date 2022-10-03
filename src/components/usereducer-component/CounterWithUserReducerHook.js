import React, { useReducer } from 'react';

const initialState = {
  firstCount: 0,
};

const reducer = (state, action) => {
  console.log('hi', action.type);
  switch (action.type) {
    case 'INCREMENT': {
      console.log('INCREMENT');
      return { ...state, firstCount: state.firstCount + 1 };
    }
    case 'DECREMENT': {
      return { ...state, firstCount: state.firstCount + 1 };
    }
    case 'RESET': {
      return state;
    }
    default: {
      return state;
    }
  }
};

function CounterWithUserReducerHook() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  console.log(counter);
  return (
    <div>
      <p>Count={counter.firstCount}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
}

export default CounterWithUserReducerHook;
