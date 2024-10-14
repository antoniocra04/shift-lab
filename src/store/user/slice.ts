import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RootState } from '../index';

interface UserState {
  token: string;
  phone: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  city: string;
}

const initialState: UserState = {
  token: '',
  phone: '',
  firstname: '',
  middlename: '',
  lastname: '',
  email: '',
  city: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
    logout: () => initialState
  }
});

export const { setUser, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
