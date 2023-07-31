import { createSlice } from '@reduxjs/toolkit';

type LoadingState = {
  loadings: boolean[];
};

const initialState: LoadingState = {
  loadings: [],
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    setLoading(state: LoadingState) {
      state.loadings = [...state.loadings, true];
    },

    finishLoading(state: LoadingState) {
      state.loadings = [...state.loadings.slice(1)];
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice;
