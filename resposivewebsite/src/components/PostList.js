import React from 'react'
import PostCard from "./PostCard";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      "& > *": {
        margin: theme.spacing(5),
      },
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


export default function PostList(props) {
  const classes = useStyles();
  const {hasNext, loadMore, postList, link} = props
  return (
    <>
      <Grid container className={classes.root} spacing={5} justify="center">
        <Grid item xs={9}>
          <Grid container justify="center" spacing={5}>
            {postList
              ? postList.map((item, id) => (
                  <Grid key={id} item>
                    <PostCard post={item} link={link} />
                  </Grid>
                ))
              : "No data available"}
          </Grid>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        <Box p={1}>
          {hasNext ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => loadMore()}
            >
              View More
            </Button>
          ) : null}
        </Box>
      </Box>
    </>
  );
}
