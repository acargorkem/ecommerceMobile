import { createSlice } from '@reduxjs/toolkit';

interface userState {
  name: string | null;
  isExist: boolean;
  isAuth: boolean;
  loading: boolean;
  showError: boolean;
}

const initialState: userState = {
  name: null,
  isExist: false,
  isAuth: false,
  loading: false,
  showError: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clear: () => initialState,
    keepUser: (state, { payload }) => {
      state.name = payload;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = userSlice;
export const { clear, keepUser } = actions;
export default reducer;
