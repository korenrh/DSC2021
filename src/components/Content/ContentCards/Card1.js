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

const Card1 = () =>  {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          src="https://i0.wp.com/boingboing.net/wp-content/uploads/2016/05/bg.jpg?fit=1&resize=1080%2C4000&ssl=1"
          className={classes.media}
          component="img"
          title="WMD"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Weapons of Math Destruction:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            How Big Data Increases Inequality and Threatens Democracy
          </Typography>
          <Typography variant="body2" component="p">
            By Cathy O'Neil
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://www.amazon.com/Weapons-Math-Destruction-Increases-Inequality/dp/0553418815">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Card1;