import React from 'react';
import {Post} from './components/Post';
import * as SC from './styles.js';

export const Posts = ({posts}) => (
    <>
        <SC.Title>Свежая публикация</SC.Title>
        <SC.Posts>
            {posts.map((post) => <Post post={post}/>)}
        </SC.Posts>
    </>
);