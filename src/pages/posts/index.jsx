import { Container } from "../../components/ui/Container/index.jsx";
import { Posts } from "../../components/Posts/index.jsx";
import { Typo } from "../../components/ui/Typo/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/slices/postSlice.js";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
    }
  }, [list, dispatch]);

  if (!list && loading) {
    return <Container>Loading</Container>;
  }

  if (!list) {
    return <>404</>;
  }

  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={list} />
    </Container>
  );
};
