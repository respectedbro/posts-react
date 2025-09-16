import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Typo} from '../../../components/Typo/index.jsx';
import {Container} from '../../../components/Container/index.jsx';

import * as SC from './styles.js';
import {Link} from '../../../components/Link/index.jsx';
import {getPost} from '../../../redux/slices/postSlice.js';
import {useParams} from 'react-router';

export const DetailPostPage = () => {
    const {id} = useParams()
    const postForView = useSelector((state) => state.posts.postForView);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPost(Number(id)));
    }, [id]);

    if (!postForView) {
        return <>Пост не найден...</>;
    }

    return (
        <Container>
            <Typo>{postForView.title}</Typo>
            <SC.Image src={postForView.image} alt={postForView.title}/>
            <SC.Text>{postForView.text}</SC.Text>
            <SC.LinkWrapper style={{clear: 'both'}}>
                <Link to={'/posts'}>Вернуться к публикациям</Link>
            </SC.LinkWrapper>
        </Container>
    );
};
