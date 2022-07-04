import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import authAPI from '../apis/authAPI';

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
  reducers: {
    addUserCreds: (state, action: PayloadAction<AuthProps>) => {
      state.user = action.payload;
    },
    removeUserCreds: (state) => {
      state.user = {
        email: '',
        password: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoggenIn = action.payload;
      })
      .addCase(authAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addUserCreds, removeUserCreds } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggenIn;

export default authSlice.reducer;
