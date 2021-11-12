import {createSlice, createAsyncThunk} from 'reduxjs/toolkit'
import axios from 'axios'

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async () => {
      const data = await axios.get('http://ongapi.alkemy.org/api/categories');
      return data.data;
    }
);


    const categorySlice = createSlice({
        name: 'category',
        initialState: {
            categories: [],
            category: {
                name: '',
                description: '',
                image: ''
            }
        },
        extraReducers: {
            [getCategories]: (state, action) => {
               return state.categories + action.payload.data
            }
        }
    })

export default categorySlice.reducer