
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';


// user_article_like
export const user_article_like = createAsyncThunk(
    'likeDislike/user_article_like',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.put(`/user-like-article`, info);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


// user_article_dislike
export const user_article_dislike = createAsyncThunk(
    'likeDislike/user_article_dislike',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.put(`/user-dislike-article`, info);
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



// like_dislike_get
export const like_dislike_get = createAsyncThunk(
    'likeDislike/like_dislike_get',
    async (articleSlug, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/like-dislike-get/${articleSlug}`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const dislikelikeReducer = createSlice({
    name: "dilikelike",
    initialState: {
        loader: false,
        errorMessage: '',
        successMessage: '',
        like: 0,
        dislike: 0,
        like_status: '',
        dislike_status: ''
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers: {
        [user_article_like.fulfilled]: (state, { payload }) => {
            state.successMessage = payload.message
        },
        [user_article_dislike.fulfilled]: (state, { payload }) => {
            state.successMessage = payload.message
        },
        [like_dislike_get.pending]: (state, _) => {
            state.loader = true
        },
        [like_dislike_get.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [like_dislike_get.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.like = payload.like
            state.dislike = payload.dislike
            state.like_status = payload.like_status
            state.dislike_status = payload.dislike_status
        }
    }
});



export const { messageClear } = dislikelikeReducer.actions;
export default dislikelikeReducer.reducer;