import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import EnterprisingService from '../../services/apiService/enterprisingService';

export const getEnterprising = createAsyncThunk(
  'enterprising/getEnterprising',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await EnterprisingService.getEnterprising();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const enterprisingAdapter = createEntityAdapter({});

export const { selectAll: selectEnterprising } = enterprisingAdapter.getSelectors(
  (state) => state.enterprising
);

const enterprisingSlice = createSlice({
  name: 'enterprising',
  initialState: enterprisingAdapter.getInitialState({
    searchText: '',
    errors: {},
    loading: false,
  }),
  reducers: {
    setUsersSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getEnterprising.pending]: (state, action) => {
      state.loading = true;
    },
    [getEnterprising.fulfilled]: (state, action) => {
      state.loading = false;
      enterprisingAdapter.setAll(state, action.payload);
    },
    [getEnterprising.fulfilled]: (state, action) => {
      state.loading = false;
      enterprisingAdapter.setAll(state, action.payload);
    },
  },
});

export const { setUsersSearchText } = enterprisingSlice.actions;
export default enterprisingSlice.reducer;
