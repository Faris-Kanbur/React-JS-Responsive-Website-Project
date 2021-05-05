import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: '25%'
  },
  media: {
    height: 350
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image="../images/faris.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Faris Kanbur
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
      <IconButton aria-label="LinkedInIcon">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="InstagramIcon">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="GitHubIcon">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="TwitterIcon">
          <TwitterIcon />
        </IconButton>
      </CardActions>
      </Grid>

      <Grid>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../images/faris.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="LinkedInIcon">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="InstagramIcon">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="GitHubIcon">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="TwitterIcon">
          <TwitterIcon />
        </IconButton>
      </CardActions>
      </Grid>

    <Grid>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../images/faris.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="LinkedInIcon">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="InstagramIcon">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="GitHubIcon">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="TwitterIcon">
          <TwitterIcon />
        </IconButton>
      </CardActions>
      </Grid>
    </Card>
  );
}
