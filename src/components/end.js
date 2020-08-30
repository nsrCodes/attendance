import React from 'react';
import { withRouter } from 'react-router-dom';

function End({absent}) {
  return (
    <div>
      <h1>End : {absent}</h1>
    </div>
  );
}

export default withRouter(End);
