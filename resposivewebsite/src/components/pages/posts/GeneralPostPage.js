import React, {useState, useEffect} from 'react'
import PostList from '../../PostList'
import axios from "axios";

const GeneralPostPage = ({link}) => {

const [nextUrl, setNextUrl] = useState();
const [postList, setPostList] = useState([]);
const getPostList = async (
    url = `https://opna.herokuapp.com/api/${link}/list/`
  ) => {
    try {
      const result = await axios.get(url);
      setPostList([...postList, ...result?.data?.results]);
      console.log(`result`, result?.data?.results)
      setNextUrl(result?.data?.next);
    } catch ({ response }) {
      if (response) {
        console.log(response.data.non_field_errors[0]);
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  const handleLoadMore = () => {
    getPostList(nextUrl);
  };

    return (
      <PostList
      hasNext={!!nextUrl}
      loadMore={handleLoadMore}
      postList={postList}
      />
    )
}

export default GeneralPostPage
