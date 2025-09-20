import {PostForm} from '../component/PostForm/index.jsx';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {editPost} from '../../../redux/slices/postSlice.js';

export const EditPostPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {list} = useSelector((state) => state.posts.posts);

    const onSubmitForm = (formValues) => {
       dispatch(editPost(formValues))
    };

    if (!list) {
        return <>Пост не найден 404...</>;
    }

    const findedPost = list.find((item) => item.id === Number(id));

    return <PostForm
        title={`Редактирование поста - ${id}`}
        onSubmitForm={onSubmitForm}
        defaultValues={findedPost}
    />;

};
