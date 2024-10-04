import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch all users for admin
export const fetchUsers = createAsyncThunk('admin/fetchUsers', async () => {
  // Logic to fetch users
});

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    banUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.map((user) => (user.id === userId ? { ...user, banned: true } : user));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { banUser } = adminSlice.actions;

export default adminSlice.reducer;
