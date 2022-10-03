import ArrayStateWithUseStateHook from './ArrayStateWithUseStateHook';
import NumberStateWithStateHook from './NumberStaeWithStateHook';
import ObjectStateWithUseStateHook from './ObjectStateWithUseStateHook';

const UseStateComponent = () => {
  return (
    <div>
      <NumberStateWithStateHook />
      <hr />
      <ArrayStateWithUseStateHook />
      <hr />
      <ObjectStateWithUseStateHook />
    </div>
  );
};

export default UseStateComponent;
