import React from 'react';
import Grid from '@material-ui/core/Grid';

function Board(amg) {
  return (
  	
	    amg.postits.postits.map((postits) => (
	      <Grid className="card">
	        <h3>{postits.title}</h3>
	        <p>{postits.text}</p>
	      </Grid>
	    ))
  );
}

export default Board;
