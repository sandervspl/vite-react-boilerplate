/**
 * This is an example file
 */
import * as i from 'types';
import { createSlice } from '@reduxjs/toolkit';

import isPendingAction from 'services/isPendingAction';

import { getData } from './thunks';


const initialState: i.DataState = {
  data: undefined,
  error: false,
  loading: false,
};


export const dataSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {},

  extraReducers: (reducer) => {
    reducer.addCase(getData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });

    reducer.addCase(getData.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });


    reducer.addMatcher(isPendingAction, (state) => {
      state.loading = true;
    });
  },
});


export default dataSlice.reducer;
