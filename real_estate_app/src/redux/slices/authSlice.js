import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { data } from 'framer-motion/client';

const BASE_URL = 'https://real-estate-app-d5038-default-rtdb.asia-southeast1.firebasedatabase.app/users.json';

export const registerUser = createAsyncThunk('auth/registerUser', async ({ email, phone, location, name, role, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post(BASE_URL, {
      email,
      password,
      name,
      phone,
      location,
      createdAt: new Date().toISOString(),
      searchHistory: [],
      favoriteProperties: [],
      reviews: [],
      updatedAt: "", 
      preferences: [],
      role,
    });
    return { id: response.data.name, email, phone, location };
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data.error || error.message);
  }
});

export const addPropertyToUser = createAsyncThunk('auth/addPropertyToUser', async ({ userId, propertyData }, { rejectWithValue }) => {
  try {
    const url = `https://real-estate-app-d5038-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}/properties.json`;
    const currentPropertiesResponse = await axios.get(url);
    const currentProperties = currentPropertiesResponse.data || [];
    const updatedProperties = [...currentProperties, propertyData];
    const response = await axios.put(url, updatedProperties);
    return updatedProperties;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response?.data?.error || error.message);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axios.get(BASE_URL);
    const users = response.data ? Object.keys(response.data).map(key => ({ id: key, ...response.data[key] })) : [];
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user;
  } catch (error) {
    return rejectWithValue(error.message || "Failed to login");
  }
});

export const fetchUsers = createAsyncThunk('auth/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error || error.message);
  }
});

export const deletePropertyFromUser = createAsyncThunk(
  'auth/deletePropertyFromUser',
  async ({ userId, propertyId }, { rejectWithValue }) => {
    try {
      // API call to delete the property from the database
      await axios.delete(`https://real-estate-app-d5038-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}/properties/${propertyId}.json`);

      // Fetch updated properties for the user
      const url = `https://real-estate-app-d5038-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}/properties.json`;
      const response = await axios.get(url);
      return response.data || []; // Return updated properties
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false, 
    user: null,
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload ? Object.keys(action.payload).map(key => ({ id: key, ...action.payload[key] })) : [];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(addPropertyToUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPropertyToUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.properties = action.payload;
      })
      .addCase(addPropertyToUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePropertyFromUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePropertyFromUser.fulfilled, (state, action) => {
        state.loading = false;
        // Update the user properties after deletion
        state.user.properties = action.payload;
      })
      .addCase(deletePropertyFromUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { clearError, logout } = authSlice.actions;

export default authSlice.reducer;
