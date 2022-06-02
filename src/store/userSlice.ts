import {
  createSlice,
  createAsyncThunk,
  isFulfilled,
  isRejected,
  isPending,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { login } from '../api/lib/users';
import * as SecureStore from 'expo-secure-store';

interface userState {
  isSignedIn: boolean;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: userState = {
  isSignedIn: false,
  isLoading: false,
  hasError: false,
};

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

// TODO: replace any with user type
export const loginThunk = createAsyncThunk<
  any,
  { email: string; password: string },
  { rejectValue: ValidationErrors }
>('user/login', async (inputs, { rejectWithValue }) => {
  try {
    const { email, password } = inputs;
    const result = await login(email, password);
    return result.data.user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isFulfilled(loginThunk), (state, { payload }) => {
        // state.authUser = payload;
        state.isSignedIn = true;
        state.isLoading = false;
      })
      .addMatcher(isPending(loginThunk), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isRejected(loginThunk), (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

const { actions, reducer } = userSlice;
export const { clear } = actions;
export default reducer;
