import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fetchPost = createAsyncThunk(
    'fetchposts',
    async (data, thunkAPI) => {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        return await response.json()
    },
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
);

const postSlice = createSlice({
    name: 'postFetch',
    initialState: {
        apiPost: [{ userId: '1', id: '', title: '', body: '' },
        ],
        posts: [],
        //  apiPost: [{userId}]


    }
    ,

    extraReducers: {
        [fetchPost.fulfilled]: (state, action) => {
            console.log(action.payload.slice(0, 10))
            state.posts = action.payload.slice(0, 10)
        }
    }
})

const postReducer = postSlice.reducer;
export default postReducer