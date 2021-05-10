import React, {useState, useEffect, Fragment} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles({
    root: {
      width: "60%",
      margin: "20px auto",
    },
    media: {
      height: 140,
    },
    module: {},
    image: {
      padding: 3,
    },
    avatar: {
      marginBottom: "0.35em",
    },
  });

const GeneralDetailPage = ({link}) => {

    const [postDetail, setPostDetail] = useState([]);
    let { slug } = useParams();
    const classes = useStyles();

    const getPostDetail = async (
        url = `https://opna.herokuapp.com/api/${link}/list/detail/holy-bible-deutsch-anfanger-98d740715f/`
      ) => {
        try {
          const result = await axios.get(url);
          console.log(result)
          setPostDetail(result?.data);
          console.log(postDetail);
        } catch ({ response }) {
          if (response) {
            console.log(response?.data?.detail);
          } else {
            console.log("Something went wrong!");
          }
        }
      };

      const {
        headtitle,
        
        image,
        excerpt,
        published,
        day,
        month,
        year,
        date_created,
        newstitle_one, //news
        newstitle_two, //news
        newstitle_three, //news
        newstitle_four, //news
        newstitle_five, //news
        news_one_content, //news
        news_two_content, //news
        news_three_content, //news
        news_four_content, //news
        news_five_content, //news
        vocab_one,
        vocab_one_mean,
        vocab_two,
        vocab_two_mean,
        vocab_three,
        vocab_three_mean,
        vocab_four,
        vocab_four_mean,
        vocab_five,
        vocab_five_mean,
        chapter, //bible
        chapter_content, //bible
        story_content, //story
        tale_content, //tale
        place,  //dialog
        dialog_content //dialog


      } = postDetail;

      useEffect(() => {
        getPostDetail();
      }, []);

      if (!postDetail) return "Loading...";

    return (
        <Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={headtitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {headtitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {day}.{month}.{year}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {excerpt}
            </Typography>
            
                {<Fragment>
                    { newstitle_one && (<Fragment>
                    <Typography gutterBottom variant="h5" component="h4">
                        {newstitle_one}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {news_one_content}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {newstitle_two}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {news_two_content}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {newstitle_three}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {news_three_content}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {newstitle_four}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {news_four_content}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {newstitle_five}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {news_five_content}
                    </Typography>
                    </Fragment>) }
                    
                    
                    { story_content && <Typography  variant="body2" color="textSecondary" component="p">
                        {story_content}
                    </Typography>}
                    
                       
                    { tale_content && <Typography  variant="body2" color="textSecondary" component="p">
                        {tale_content}
                    </Typography>}
                    
                    { chapter &&
                        <Fragment>
                         <Typography gutterBottom variant="h5" component="h4">
                         {chapter}
                        </Typography>
                        <Typography  variant="body2" color="textSecondary" component="p">
                        {chapter_content}
                        </Typography>
                        </Fragment>
                    }
                    
                    { place &&
                        <Fragment>
                         <Typography gutterBottom variant="h5" component="h4">
                         {place}
                        </Typography>
                        <Typography  variant="body2" color="textSecondary" component="p">
                        {dialog_content}
                        </Typography>
                        </Fragment>
                    }
                </Fragment>}
                <Typography gutterBottom variant="h5" component="h4">
                        {vocab_one}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {vocab_one_mean}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {vocab_two}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {vocab_two_mean}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {vocab_three}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {vocab_three_mean}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {vocab_four}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {vocab_four_mean}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {vocab_five}
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {vocab_five_mean}
                    </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Fragment>
    )
}

export default GeneralDetailPage
