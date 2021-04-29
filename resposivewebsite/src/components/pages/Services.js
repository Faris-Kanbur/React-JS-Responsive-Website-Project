import React from 'react';
import '../../App.css';
import '../Service.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
  },
  icon: {
      marginRight: theme.spacing(2),  // '20px'
  },
  buttons: {
      marginTop: '40px',
  },
  cardGrid: {
      marginTop: '20px 0'
  },
  card: {
      height: '75%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '65%',
      
  },
  cardMedia :{
      paddingTop: '99.25%',
    
  },
  cardContent:{
      flexGrow: 1,
  },

}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="services">
                  
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card} >
                            <CardMedia 
                                className={classes.cardMedia}
                                image="../images/emre.jpg"
                                title="Image title"
                            />
                            <CardContent className={classes.CardContent}>
                                <Typography gutterBottom variant="h5" color="primary">
                                    Emre Kurt
                                </Typography>
                                <Typography gutterBottom variant="h6" color='textSecondary'>
                                  Full Stack Developer
                                </Typography>
                                <Typography>
                                    This is media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card} >
                            <CardMedia 
                                className={classes.cardMedia}
                                image="../images/faris.jpg"
                                title="Image title"
                            />
                            <CardContent className={classes.CardContent}>
                                <Typography gutterBottom variant="h5" color="primary">
                                    Faris Kanbur
                                </Typography>
                                <Typography gutterBottom variant="h6" color='textSecondary'>
                                  Full Stack Developer
                                </Typography>
                                <Typography>
                                    This is media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card} >
                            <CardMedia 
                                className={classes.cardMedia}
                                image="../images/hüso.jpeg"
                                title="Image title"
                            />
                            <CardContent className={classes.CardContent}>
                                <Typography gutterBottom variant="h5" color="primary">
                                    Hüseyin Gülçiçek
                                </Typography>
                                <Typography gutterBottom variant="h6" color='textSecondary'>
                                  Data Analyst
                                </Typography>
                                <Typography>
                                    This is media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                
                </Grid>
              </Container>
    </div>
  );
}
