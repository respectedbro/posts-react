import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Typo} from '../../../components/Typo/index.jsx';
import {Container} from '../../../components/Container/index.jsx';

import {Link} from '../../../components/Link/index.jsx';
import {getPostById} from '../../../redux/slices/postSlice.js';
import {useParams} from 'react-router';

import * as SC from './styles.js';

export const DetailPostPage = () => {
    const {id} = useParams()
    const postForView = useSelector((state) => state.posts.postForView);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPostById(Number(id)));
    }, [id]);

    if (postForView.loading) {
        return <Container>Loading...</Container>
    }

    if (!postForView.post) {
        return <>Пост не найден...</>;
    }

    const {post} = postForView

    return (
        <Container>
            <Typo>{post.title}</Typo>
            {post.image && <SC.Image src={post.image} alt={post.title}/>}
            <SC.Text>{post.body}</SC.Text>
            <SC.LinkWrapper style={{clear: 'both'}}>
                <Link to={'/posts'}>Вернуться к публикациям</Link>
            </SC.LinkWrapper>
        </Container>
    );
};
