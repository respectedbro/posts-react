import {Posts} from '../../components/Posts/index.jsx';
import {Container} from '../../components/Container/index.jsx';
import React, {useEffect} from 'react';
import {Typo} from '../../components/Typo/index.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {getFreshPosts} from '../../redux/slices/postSlice.js';


export const MainPage = () => {
    const dispatch = useDispatch()

    const postForView = useSelector((state) => state.posts.postForView);
    const freshPosts = useSelector((state) => state.posts.freshPosts);

    useEffect(() => {
        dispatch(getFreshPosts())
    }, []);

    return <>
        <Container>
            {freshPosts &&  <>
                <Typo>Свежая публикация</Typo>
                <Posts posts={freshPosts}/>
            </>
            }
            {postForView && <>
                <Typo>Последний просмотренный пост</Typo>
                <Posts posts={[postForView]}/>
            </>
            }
        </Container>
    </>;
};


