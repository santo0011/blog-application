import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import jwt from 'jwt-decode';


// add_tag
export const add_tag = createAsyncThunk(
    'tag/add_tag',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/add-tag', info);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


// get_tag
export const get_tag = createAsyncThunk(
    'tag/get_tag',
    async ({ searchValue, page, parPage }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-tag?searchValue=${searchValue}&&page=${page}&&parPage=${parPage}`);

            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

// delete_tag
export const delete_tag = createAsyncThunk(
    'tag/delete_tag',
    async (id, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.delete(`/delete-tag/${id}`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

// edit_tag
export const edit_tag = createAsyncThunk(
    'tag/edit_tag',
    async (tagSlug, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/edit-tag/${tagSlug}`);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

// update_tag
export const update_tag = createAsyncThunk(
    'tag/update_tag',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.put(`/update-tag`, info);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const tagReducer = createSlice({
    name: "tag",
    initialState: {
        loader: false,
        errorMessage: '',
        successMessage: '',
        allTag: [],
        tagCount: 0,
        editTag: {}
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers: {
        [add_tag.pending]: (state, _) => {
            state.loader = true
        },
        [add_tag.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [add_tag.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message
        },
        [get_tag.fulfilled]: (state, { payload }) => {
            state.allTag = payload.allTag
            state.tagCount = payload.tagCount
        },
        [delete_tag.fulfilled]: (state, { payload }) => {
            state.successMessage = payload.message
        },
        [edit_tag.fulfilled]: (state, { payload }) => {
            state.editTag = payload.editTag
        },
        [update_tag.fulfilled]: (state, { payload }) => {
            state.successMessage = payload.message
        }
    }
});

export const { messageClear } = tagReducer.actions;
export default tagReducer.reducer;