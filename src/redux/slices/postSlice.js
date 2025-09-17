import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postsAPI} from '../../api/postsAPI.js';

const initialState = {
    posts: {
        list: null,
        loading: false,
    },
    postForView: {
        post: null,
        loading: false
    },
    freshPosts: null
};

export const getPostById = createAsyncThunk(
    'posts/fetchById',
    async (postId) => {
        return await postsAPI.fetchById(postId);
    }
);
export const getPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        return await postsAPI.fetchPosts();
    }
);



export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPost: (state, action) => {
            //edit post
        },

        getFreshPosts: (state) => {
            state.freshPosts = state.posts.list.slice(0, 3);
        },

        addPost: (state, action) => {
            // add new post by data
        }

    },

    extraReducers: (builder) => {
        builder.addCase(getPostById.pending, (state) => {
            state.postForView = {
                post: null,
                loading: true
            }
        });
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false
            }
        });
        builder.addCase(getPosts.pending, (state) => {
            state.posts = {
                list: null,
                loading: true
            }
        });
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = {
                list: action.payload,
                loading: false
            }
        });
    }
});

export const {addPost, editPost, setPosts, getFreshPosts} = postsSlice.actions;

export default postsSlice.reducer;