import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import resultsServive from '../../services/apiService/resultsServive';

export const getResultsTable = createAsyncThunk(
  'results/getResultsTable',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await resultsServive.getResultsTable(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getResultsSummary = createAsyncThunk(
  'results/getResultsSummary',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await resultsServive.getResultsSummary(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const resultsAdapter = createEntityAdapter({});

export const { selectAll: selectResults, selectById: selectResultsById } =
  resultsAdapter.getSelectors((state) => state.results);

const resultsSlice = createSlice({
  name: 'results',
  initialState: resultsAdapter.getInitialState({
    errors: {},
    loading: false,
    results: [],
    summary: [],
  }),
  reducers: {},
  extraReducers: {
    [getResultsTable.pending]: (state) => {
      state.loading = true;
    },
    [getResultsTable.fulfilled]: (state, action) => {
      state.loading = false;
      state.results = action.payload;
    },
    [getResultsTable.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [getResultsSummary.pending]: (state) => {
      state.loading = true;
    },
    [getResultsSummary.fulfilled]: (state, action) => {
      state.loading = false;
      state.summary = action.payload;
    },
    [getResultsSummary.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = resultsSlice.actions;

export default resultsSlice.reducer;
