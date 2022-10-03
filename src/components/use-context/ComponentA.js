import React from 'react';
import ComponentB from './ComponentB';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ComponentA() {
  return (
    <UserContext.Provider value="Kushi">
      <ChannelContext.Provider value="CodeEvolution">
        <ComponentB />
      </ChannelContext.Provider>
    </UserContext.Provider>
  );
}

export default ComponentA;
