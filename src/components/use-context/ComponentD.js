import React, { useContext } from 'react';
import { UserContext, ChannelContext } from './ComponentA';
function ComponentD() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default ComponentD;
