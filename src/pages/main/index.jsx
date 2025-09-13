import {Posts} from '../../components/Posts/index.jsx';
import {Container} from '../../components/Contaier/index.jsx';

const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png'
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png'
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png'
    },
]

export const MainPage = () => (
    <>
        <Container>
            <Posts posts={INITIAL_POSTS}/>
        </Container>
    </>

)