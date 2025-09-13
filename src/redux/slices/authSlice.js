import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null
};

export const authSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        login: (state, action) => {
            // login user
        },

        logout: (state) => {
            // logout user
        },

        registerUser: (state, action) => {
            // registration user
        }
    }

});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;