import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import jwt from 'jwt-decode';


// add_articale
export const add_articale = createAsyncThunk(
    'article/add_articale',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/add-artical', info);

            console.log(data)


            // return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const articleReducer = createSlice({
    name: "article",
    initialState: {
        errorMessage: '',
        successMessage: '',
        loader: false
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers: {

    }
});


export const { messageClear } = articleReducer.actions;
export default articleReducer.reducer;