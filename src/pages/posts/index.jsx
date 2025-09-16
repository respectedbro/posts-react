import { Container } from "../../components/Container/index.jsx";
import { Posts } from "../../components/Posts/index.jsx";
import { Typo } from "../../components/Typo/index.jsx";
import {useSelector} from 'react-redux';

export const PostsPage = () => {
  const posts = useSelector((state) => state.posts.list)

  return <Container>
      <Typo>Публикации</Typo>
      <Posts posts={posts}/>
    </Container>
}
