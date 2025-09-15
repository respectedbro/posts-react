import { Container } from "../../components/Container/index.jsx";
import { Posts } from "../../components/Posts/index.jsx";
import { Typo } from "../../components/Typo/index.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const INITIAL_POSTS = [
  {
    id: 1,
    title: "Post 1",
    image:
      "https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Post 2",
    image:
      "https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png",
    text: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet exercitationem ipsum iure magni minima minus perferendis praesentium quia vel!",
  },
  {
    id: 3,
    title: "Post 3",
    image:
      "https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png",
    text: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet exercitationem ipsum iure magni minima minus perferendis praesentium quia vel!",
  },
  {
    id: 4,
    title: "Post 4",
    image:
      "https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png",
    text: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet exercitationem ipsum iure magni minima minus perferendis praesentium quia vel!",
  },
  {
    id: 5,
    title: "Post 5",
    image:
      "https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png",
    text: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet exercitationem ipsum iure magni minima minus perferendis praesentium quia vel!",
  },
];

export const PostsPage = () => (
  <>
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={INITIAL_POSTS} />
    </Container>
  </>
);
