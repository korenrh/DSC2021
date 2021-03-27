import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card1 from '../Content/ContentCards/Card1';
import Card2 from '../Content/ContentCards/Card2';
import Card3 from '../Content/ContentCards/Card3';


const LearnPage = () => {
    return (
        <div>
          <h2>If you’d like to learn more, further reading on bias and its impact on algorithms and society can be found in the following books:</h2>
          <Grid container spacing={5}>
            <Grid item md={3}>
              <Card1></Card1>
            </Grid>
            <Grid item md={3}>
              <Card2></Card2>
            </Grid>
            <Grid item md={3}>
              <Card3></Card3>
            </Grid>
          </Grid>
        </div>
    );
}

export default LearnPage;