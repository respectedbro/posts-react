import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [
        {
            id: 5,
            title: 'Post 5',
            image:
                'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 4,
            title: 'Post 4',
            image:
                'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png',
            text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet exercitationem ipsum iure magni minima minus perferendis praesentium quia vel!'
        },
        {
            id: 3,
            title: 'Post 3',
            image:
                'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png',
            text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet exercitationem ipsum iure magni minima minus perferendis praesentium quia vel!'
        },
        {
            id: 2,
            title: 'Post 2',
            image:
                'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png',
            text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet exercitationem ipsum iure magni minima minus perferendis praesentium quia vel!'
        },
        {
            id: 1,
            title: 'Post 1',
            image:
                'https://habrastorage.org/r/w1560/files/59e/ec1/0dd/59eec10ddaae4ee6ac2d9a95057dc950.png',
            text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet exercitationem ipsum iure magni minima minus perferendis praesentium quia vel!'
        }
    ],
    postForView: null,
    freshPosts: null
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.list = action.payload;
        },

        editPost: (state, action) => {
            //edit post
        },

        getPost: (state, action) => {

            state.postForView = state.list.find((item) => item.id === action.payload);
        },

        getFreshPosts: (state) => {
            state.freshPosts = state.list.slice(0, 3);
        },

        addPost: (state, action) => {
            // add new post by data
        }

    }
});

export const {addPost, editPost, getPost, setPosts, getFreshPosts} = postsSlice.actions;

export default postsSlice.reducer;