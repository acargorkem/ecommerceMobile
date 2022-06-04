import {
  createSlice,
  createAsyncThunk,
  isFulfilled,
  isRejected,
  isPending,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { login, signup } from '../api/lib/users';

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
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

// TODO: replace any with user type
export const signupThunk = createAsyncThunk<
  any,
  {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  },
  { rejectValue: ValidationErrors }
>('user/signup', async (inputs, { rejectWithValue }) => {
  try {
    const { firstName, lastName, phone, email, password } = inputs;
    const result = await signup(firstName, lastName, phone, email, password);
    return result.data.user;
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
      .addMatcher(isFulfilled(loginThunk, signupThunk), (state) => {
        // state.authUser = payload;
        state.isSignedIn = true;
        state.isLoading = false;
      })
      .addMatcher(isPending(loginThunk, signupThunk), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isRejected(loginThunk, signupThunk), (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

const { actions, reducer } = userSlice;
export const { clear } = actions;
export default reducer;
