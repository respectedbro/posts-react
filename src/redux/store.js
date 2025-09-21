import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './slices/postSlice.js';
import authReducer from './slices/authSlice.js';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer
    }
});

