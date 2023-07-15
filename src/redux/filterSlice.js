import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});
// Экспортируем генераторы экшенов и редюсер
export const { setFilter } = filterSlice.actions;
