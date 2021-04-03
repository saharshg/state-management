import { Grid } from '@material-ui/core';
import React from 'react';

const Hmm = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <div
          style={{
            backgroundImage: "url('../confused.jpg')",
            height: 500,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <h2>
          The useEffect() Hook “forgets” the previous render. It cleans up the
          last effect and sets up the next effect. The next effect closes over
          fresh props and state. This is why our first attempt worked for simple
          cases.
        </h2>
        <h2>The setInterval "does not" forgets the callback.</h2>
        <h1 style={{ fontSize: 35 }}>Real Solution</h1>
        <h2>
          <ul>
            <li>callback must be "mutable"</li>
            <li>callback should "persist"</li>
          </ul>
        </h2>
      </Grid>
    </Grid>
  );
};

export default Hmm;
