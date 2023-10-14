
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';


 // user_article_like
 export const user_article_like = createAsyncThunk(
    'likeDislike/user_article_like',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.put(`/user-like-article`, info);

            console.log(data)

            // return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const dislikelikeReducer = createSlice({
    name: "dilikelike",
    initialState: {
        like: 0,
        dislike: 0,
        like_status: '',
        dislike_status: '',
        like_dislike_error: '',
        like_dislike_message: ''
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


export const { messageClear } = dislikelikeReducer.actions;
export default dislikelikeReducer.reducer;