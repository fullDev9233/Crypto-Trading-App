import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import authAPI from '../apis/authApi';

export interface AuthState {
  isLoggenIn: boolean;
  status: 'idle' | 'loading' | 'failed';
  user: AuthProps;
}

const initialState: AuthState = {
  isLoggenIn: false,
  status: 'idle',
  user: {
    email: '',
    password: '',
  },
};

export const authAsync = createAsyncThunk('auth/login', async (userInfo: AuthProps) => {
  const response = await authAPI(userInfo);
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoggenIn = action.payload.isLoggedIn;
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
      })
      .addCase(authAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggenIn;
export const selectUserCreds = (state: RootState) => state.auth.user;

export default authSlice.reducer;
