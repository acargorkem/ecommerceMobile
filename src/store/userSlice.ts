import { createSlice } from '@reduxjs/toolkit';

interface userState {
  isSignedIn: boolean;
}

const initialState: userState = {
  isSignedIn: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: {},
});

const { actions, reducer } = userSlice;
export const { clear } = actions;
export default reducer;
