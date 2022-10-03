import React from 'react';
import AddEventListenerWithUseEffect from './AddEventListenerWithUseEffect';
import CallingAPIOnClickButton from './CallingAPIOnClickButton';
import CallingAPIWithUseEffect from './CallingAPIWithUseEffect';
import DependencyArrayCommonMistake from './DependencyArrayCommonMistake';
import MemLeakEventListerWithUseEffect from './MemLeakEventListenerWithUseEffect';
import TitleSettingWithUseEffectHook from './TitleSettingWithUseEffectHook';

function UseEffectComponent() {
  return (
    <div>
      <TitleSettingWithUseEffectHook />
      <hr />
      <AddEventListenerWithUseEffect />
      <hr />
      <MemLeakEventListerWithUseEffect />
      <hr />
      <DependencyArrayCommonMistake />
      <hr />
      <CallingAPIWithUseEffect />
      <hr />
      <CallingAPIOnClickButton />
    </div>
  );
}

export default UseEffectComponent;
