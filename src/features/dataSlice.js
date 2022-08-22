import {createSlice,  createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const initialState ={
    data: [],
    isLoading: false,
}

export const getData = createAsyncThunk(
    'data/getData',
    async( thunkAPI )=>{ 
        try {
            const resp = await axios.get('https://covidnigeria.herokuapp.com/api')
           // console.log(resp?.data?.data, "resp")
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)
const covidDataSlice = createSlice({
    name:'covidData',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getData.pending]: (state)=>{
            state.isLoading = true
        },
        [getData.fulfilled]: (state, {payload})=>{
            state.isLoading = false
            
            state.data = payload.data
        },
        [getData.rejected]: (state)=>{
            state.isLoading = false
        }
    }
    
})

export default covidDataSlice.reducer
