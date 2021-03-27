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

const Card2 = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src="http://img.new.livestream.com/events/000000000080d7ee/245787a8-4c7b-4427-8a88-def9cf6af04d.png"
          component="img"
          title="Hello"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Hello World:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Being Human in the Age of Algorithms
            </Typography>
            <Typography variant="body2" component="p">
            By Hannah Fry
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://www.amazon.com/Hello-World-Being-Human-Algorithms/dp/039363499X">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Card2;