import {Container} from '../../components/Container/index.jsx';
import {Posts} from '../../components/Posts/index.jsx';
import {Typo} from '../../components/Typo/index.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getPosts} from '../../redux/slices/postSlice.js';

export const PostsPage = () => {
    const {list, loading} = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    console.log(list);
    console.log(loading);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    if (!list && loading) {
        return <Container>Loading</Container>
    }

    if (!list) {
        return <>404</>
    }0

    return <Container>
        <Typo>Публикации</Typo>
        <Posts posts={list}/>
    </Container>;
};
