import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  module: {
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    "text-overflow": "ellipsis",
    overflow: "hidden",
  },
  image: {
    padding: 3,
  },
  avatar: {
    marginBottom: "0.35em",
  },
});

export default function PostCard(props) {
  const {post, link} = props
  const {
    image,
    excerpt,
    slug,
    headtitle,
    day,
    month,
    year,
    
  } = post;
  const classes = useStyles();
  const history = useHistory();
  const openDetails = () => {
    history.push(`${link}/detail/${slug}`);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openDetails}>
        <CardMedia
          className={classes.media}
          image={image }
          title={headtitle}
          excerpt={excerpt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {headtitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {day}.{month}.{year}
          </Typography>
          <p className={classes.module}>{excerpt}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}