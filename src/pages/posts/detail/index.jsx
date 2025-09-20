import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typo } from "../../../components/Typo/index.jsx";
import { Container } from "../../../components/Container/index.jsx";

import { Link } from "../../../components/Link/index.jsx";
import { getPostById, showPost } from "../../../redux/slices/postSlice.js";
import { useParams } from "react-router";

import * as SC from "./styles.js";

export const DetailPostPage = () => {
  const { id } = useParams();
  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector((state) => state.posts.postForView);
  const dispatch = useDispatch();

  useEffect(() => {
    const intId = Number(id);
    const findedPost = list
      ? list.find((item) => item.id === intId)
      : undefined;

    if (findedPost) {
      dispatch(showPost(findedPost));
    } else {
      dispatch(getPostById(intId));
    }
  }, [id, list, dispatch]);

  if (postForView.loading) {
    return <Container>Loading...</Container>;
  }

  if (
    !postForView.post ||
    !Object.prototype.hasOwnProperty.call(postForView.post, "id")
  ) {
    return <>Пост не найден...</>;
  }

  const { post } = postForView;
  const image =
    post.image ||
    "https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png";

  return (
    <Container>
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title} />
      <SC.Text>{post.body}</SC.Text>
      <SC.LinkWrapper style={{ clear: "both" }}>
        <Link to="/posts">Вернуться к публикациям</Link>
        <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
      </SC.LinkWrapper>
    </Container>
  );
};
