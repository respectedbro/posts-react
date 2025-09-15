import { useParams } from "react-router";
import { INITIAL_POSTS } from "../index.jsx";
import { useMemo } from "react";
import { Typo } from "../../../components/Typo/index.jsx";
import { Container } from "../../../components/Container/index.jsx";

import * as SC from "./styles.js";
import { Link } from "../../../components/Link/index.jsx";

export const DetailPostPage = () => {
  const { id } = useParams();
  const currentPost = useMemo(
    () => INITIAL_POSTS.find((item) => item.id === Number(id)),
    [id]
  );

  if (!currentPost) {
    return <>Пост не найден...</>;
  }

  return (
    <Container>
      <Typo>{currentPost.title}</Typo>
      <SC.Image src={currentPost.image} alt={currentPost.title} />
      <SC.Text>{currentPost.text}</SC.Text>
      <SC.LinkWrapper style={{ clear: "both" }}>
        <Link to={"/posts"}>Вернуться к публикациям</Link>
      </SC.LinkWrapper>
    </Container>
  );
};
