import React from 'react';

const Post = ({ match }) => {
  return <h1> {match.params.id}</h1>;
};

export default Post;
