import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const positionsAdapter = createEntityAdapter();
const initialState = positionsAdapter.getInitialState({});
const positionSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    addedPositions: positionsAdapter.addMany,
  },
});

export const {
  selectAll: selectAllPositions,
  selectById: selectPositionById,
  selectIds: selectPositionsIds,
} = positionsAdapter.getSelectors((state) => state.positions);

export const { addedPositions } = positionSlice.actions;

export default positionSlice.reducer;
