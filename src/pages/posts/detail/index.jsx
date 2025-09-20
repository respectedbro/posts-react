import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Typo} from '../../../components/ui/Typo/index.jsx';
import {Container} from '../../../components/ui/Container/index.jsx';

import {Link} from '../../../components/ui/Link/index.jsx';
import {getPostById, showPost, deletePost} from '../../../redux/slices/postSlice.js';
import {useParams, useNavigate} from 'react-router-dom';

import * as SC from './styles.js';

export const DetailPostPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {list} = useSelector((state) => state.posts.posts);
    const postForView = useSelector((state) => state.posts.postForView);

    const [postForDelete, setPostForDelete] = useState(null);

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete))

        setPostForDelete(null)


        return navigate('/posts')
    }

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
        !Object.prototype.hasOwnProperty.call(postForView.post, 'id')
    ) {
        return <>Пост не найден...</>;
    }


    const {post} = postForView;
    const image =
        post.image ||
        'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png';

    return (
        <Container>
            {postForDelete && <SC.ModalWrapper>
                <SC.Modal>
                    <SC.ModalText>Вы точно уверены, что хотите удалить публикцию с id - {postForDelete.id}</SC.ModalText>
                    <SC.ModalContent>
                        <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
                        <button onClick={() => setPostForDelete(null)} >Нет</button>
                    </SC.ModalContent>
                </SC.Modal>
            </SC.ModalWrapper>}
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title}/>
            <SC.Text>{post.body}</SC.Text>
            <SC.LinkWrapper style={{clear: 'both'}}>
                <Link to="/posts">Вернуться к публикациям</Link>
                {list && <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>}
                {list && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}
            </SC.LinkWrapper>
        </Container>
    );
};
