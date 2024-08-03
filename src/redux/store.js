
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
//error
//syntax error 
const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default store;
