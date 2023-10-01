import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import jwt from 'jwt-decode';


// add_articale
export const add_articale = createAsyncThunk(
    'article/add_articale',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/add-artical', info);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


// get_all_article
export const get_all_article = createAsyncThunk(
    'article/get_all_article',
    async ({ searchValue, page, parPage }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-artical?searchValue=${searchValue}&&page=${page}&&parPage=${parPage}`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


// article_edit
export const article_edit = createAsyncThunk(
    'article/article_edit',
    async (articleSlug, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/edit-artical/${articleSlug}`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

// article_update
export const article_update = createAsyncThunk(
    'article/article_update',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post(`/update-artical`, info);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


// delete_article
export const delete_article = createAsyncThunk(
    'article/delete_article',
    async (id, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.delete(`/delete-artical/${id}`);
            return fulfillWithValue(data)
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
        loader: false,
        allArticle: [],
        articleCount: 0,
        editArticle: {}
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers: {
        [add_articale.pending]: (state, _) => {
            state.loader = true
        },
        [add_articale.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [add_articale.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message
        },
        [get_all_article.fulfilled]: (state, { payload }) => {
            state.allArticle = payload.allArticle
            state.articleCount = payload.articleCount
        },
        [article_edit.fulfilled]: (state, { payload }) => {
            state.editArticle = payload.editArticle
        },
        [article_update.rejected]: (state, { payload }) => {
            state.errorMessage = payload.error
        },
        [article_update.fulfilled]: (state, { payload }) => {
            state.successMessage = payload.message
        },
        [delete_article.rejected]: (state, { payload }) => {
            state.errorMessage = payload.error
        },
        [delete_article.fulfilled]: (state, { payload }) => {
            state.successMessage = payload.message
        }
    }
});


export const { messageClear } = articleReducer.actions;
export default articleReducer.reducer;