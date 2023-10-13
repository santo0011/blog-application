import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import jwt from 'jwt-decode';


// home_article_get
export const home_article_get = createAsyncThunk(
    'home/home_article_get',
    async ({ searchValue, page, parPage }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/home-article-get?searchValue=${searchValue}&&page=${page}&&parPage=${parPage}`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



// home_tag_category_get
export const home_tag_category_get = createAsyncThunk(
    'home/home_tag_category_get',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/home-get-tag-category`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


// old_react_article
export const old_react_article = createAsyncThunk(
    'home/old_react_article',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/home-recent-old-get`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



// get_category_article
export const get_category_article = createAsyncThunk(
    'home/get_category_article',
    async ({ page, parPage, categorySlug }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/category-article-get?page=${page}&&parPage=${parPage}&&categorySlug=${categorySlug}`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

// get_tag_article
export const get_tag_article = createAsyncThunk(
    'home/get_tag_article',
    async ({ page, parPage, tagSlug }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/tag-article-get?page=${page}&&parPage=${parPage}&&tagSlug=${tagSlug}`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const homeReducer = createSlice({
    name: "home",
    initialState: {
        loader: false,
        errorMessage: '',
        successMessage: '',
        homeArticle: [],
        countArticle: 0,
        homeCategory: [],
        homeTag: [],
        oldArticle: [],
        recentArticle: [],
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers: {
        [home_article_get.pending]: (state, _) => {
            state.loader = true
        },
        [home_article_get.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [home_article_get.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.homeArticle = payload.homeArticle
            state.countArticle = payload.countArticle
        },
        [home_tag_category_get.fulfilled]: (state, { payload }) => {
            state.homeCategory = payload.homeCategory
            state.homeTag = payload.homeTag
        },
        [old_react_article.fulfilled]: (state, { payload }) => {
            state.oldArticle = payload.oldArticle
            state.recentArticle = payload.recentArticle
        },
        [get_category_article.pending]: (state, _) => {
            state.loader = true
        },
        [get_category_article.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.countArticle = payload.countArticle
            state.homeArticle = payload.homeArticle
        },
        [get_tag_article.pending]: (state, _) => {
            state.loader = true
        },
        [get_tag_article.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.countArticle = payload.countArticle
            state.homeArticle = payload.homeArticle
        },
    }
});


export const { messageClear } = homeReducer.actions;
export default homeReducer.reducer;