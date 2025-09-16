import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postsAPI } from '../../api/postsAPI.js';

const initialState = {
    list: [],
    postForView: null,
    freshPosts: null
};

export const getPostById = createAsyncThunk(
    'posts/fetchById',
    async (postId) => {
        const response = await postsAPI.fetchById(postId)
        console.log(response);
        return response.data
    },
)

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

        getFreshPosts: (state) => {
            state.freshPosts = state.list.slice(0, 3);
        },

        addPost: (state, action) => {
            // add new post by data
        }

    },

    extraReducers: (builder) => {
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.postForView = action.payload
        })
    },
});

export const {addPost, editPost, setPosts, getFreshPosts} = postsSlice.actions;

export default postsSlice.reducer;