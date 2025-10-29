import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDate: '',
  endDate: '',
};

const BookDate = createSlice({
  name: 'bookdate',
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    bookdate: BookDate.reducer,
  },
});

export const { setStartDate, setEndDate } = BookDate.actions;
export default BookDate.reducer;
export type RootState = ReturnType<typeof store.getState>;
