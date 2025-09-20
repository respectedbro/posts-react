import { PostForm } from "../component/PostForm/index.jsx";
import {addPost} from '../../../redux/slices/postSlice.js';
import {useDispatch} from 'react-redux';

export const AddPostPage = () =>  {
    const dispatch = useDispatch();
    const onSubmitForm = (formValues) => {
        dispatch(addPost(formValues));
    }

    return (
        <PostForm title='Добавление нового поста' onSubmitForm={onSubmitForm}/>
    )
}
