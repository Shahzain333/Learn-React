import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer
        //TODO: add more slice here for post 
        //post: postSlice
    }
})

export default store
