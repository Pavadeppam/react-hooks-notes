import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CallingAPIWithUseEffect() {
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      });
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {post.title}
    </div>
  );
}

export default CallingAPIWithUseEffect;

// ***********************************************************************
// 1 call all data
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function CallingAPIWithUseEffect() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
//       console.log(response.data);
//       setPosts(response.data);
//     });
//   }, []);
//   return (
//     <div>
//       {posts.map((post) => (
//         <p>{post.title}</p>
//       ))}
//     </div>
//   );
// }

// export default CallingAPIWithUseEffect;
