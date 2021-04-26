import { createAsyncThunk } from '@reduxjs/toolkit';


export const getData = createAsyncThunk(
  'data/GET_DATA',
  async (_, { dispatch }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return true;
    } catch (err) {
      throw err;
    }
  },
);
