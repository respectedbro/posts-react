import {Outlet} from 'react-router/internal/react-server-client';
import * as SC from './styles.js';
import {Container} from '../ui/Container/index.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/slices/authSlice.js';
import {useNavigate} from 'react-router-dom';

export const Root = () => {
    const {user} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickExitBtn = () => {
        dispatch(logout());
        navigate('/auth')
    };

    return (
        <>
            <Container>
                <SC.Menu>
                    <SC.MenuItem to={'/'}>Главная</SC.MenuItem>
                    <SC.MenuItem to={'/posts'}>Список постов</SC.MenuItem>
                    {!user && <SC.MenuItem to={'/auth'}>Авторизация</SC.MenuItem>}
                    {!user && <SC.MenuItem to={'/registration'}>Регистрация</SC.MenuItem>}
                    {user && <SC.MenuItem to={'/posts/add'}>Добавление поста</SC.MenuItem>}
                    {user && <button onClick={onClickExitBtn}>Выход</button>}
                </SC.Menu>
            </Container>
            <Outlet/>
        </>
    );
};