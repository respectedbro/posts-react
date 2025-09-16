import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './slices/postSlice.js';

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
});

