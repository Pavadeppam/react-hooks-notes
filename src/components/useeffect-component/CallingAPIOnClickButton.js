import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CallingAPIOnClickButton() {
  const [id, setId] = useState(100);
  const [post, setPost] = useState({});
  const handleClick = () => {
    setId(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data));
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
      <p>{post.title}</p>
    </div>
  );
}

export default CallingAPIOnClickButton;
