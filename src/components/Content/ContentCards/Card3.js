import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Card3 = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src="https://i.pinimg.com/originals/a0/ad/70/a0ad70af6d60450727ca2335ace6aad3.jpg"
          title="Invisible"
          component="img"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Invisible Women:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Data Bias in a World Designed For Men
            </Typography>
            <Typography variant="body2" component="p">
            By Caroline Criado Perez
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://www.amazon.com/Invisible-Women-Data-World-Designed/dp/1419729071">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Card3;