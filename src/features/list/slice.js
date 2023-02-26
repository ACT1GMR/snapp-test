import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchList } from './API';

const initialState = {
  list: [],
  status: 'idle'
};

export const getList = createAsyncThunk(
  'list/getList',
  async () => {
    const response = await fetchList();
    return response.data;
  }
);

export const listSlice = createSlice({
  name: 'list',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload
      })
      .addCase(getList.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export const selectList = (state) => state.list;

export default listSlice.reducer;
