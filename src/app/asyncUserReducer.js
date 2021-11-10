import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// BLOCKER: USERS BACKLOG SERVICES: voy a usar los 
//services publicos, luego se va necesitar reemplazar por
// los especificos
export const fetchUsers = createAsyncThunk('user/list', async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
        const { users } = await axios.get("https://jsonplaceholder.typicode.com/users");
        return users
    } catch (error) {
        return error?.response
    }
})


//slice

const userSlice = createSlice({
    name: "users",
    initialState: {},
    extraReducers: {
        // estado pendiente de query
        [fetchUsers.pending]: (state, action) => {
            state.loading = true
        },
        // estado cumplido de query
        [fetchUsers.fulfilled]: (state, action) => {
            state.userLists = action.payload;
            state.loading = false;
        },
        //estado de error de query
        [fetchUsers.pending]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer