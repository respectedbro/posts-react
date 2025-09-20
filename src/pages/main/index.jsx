import { Posts } from "../../components/Posts/index.jsx";
import { Container } from "../../components/ui/Container/index.jsx";
import React, { useEffect } from "react";
import { Typo } from "../../components/ui/Typo/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getFreshPosts } from "../../redux/slices/postSlice.js";

export const MainPage = () => {
  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.posts.postForView);
  const { posts, loading } = useSelector((state) => state.posts.freshPosts);

  useEffect(() => {
    dispatch(getFreshPosts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading && <>Loading...</>}

        {posts && (
          <>
            <Typo>Свежая публикация</Typo>
            <Posts posts={posts} />
          </>
        )}
        {post && (
          <>
            <Typo>Последний просмотренный пост</Typo>
            <Posts posts={[post]} />
          </>
        )}
      </Container>
    </>
  );
};
