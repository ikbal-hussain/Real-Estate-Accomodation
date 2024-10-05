import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch properties from the API
export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async () => {
    const response = await axios.get(
      'https://real-estate-app-d5038-default-rtdb.asia-southeast1.firebasedatabase.app/propertiesData.json'
    );
    return Object.values(response.data);
  }
);

// Add a new property to the API
export const addProperty = createAsyncThunk(
  'properties/addProperty',
  async (propertyData) => {
    const response = await axios.post(
      'https://real-estate-app-d5038-default-rtdb.asia-southeast1.firebasedatabase.app/propertiesData.json',
      propertyData
    );
    return Object.values(response.data);// Assuming the API returns the created property data
  }
);

const propertySlice = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
    filteredProperties: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterByPrice: (state, action) => {
      const budget = action.payload;
      state.filteredProperties = state.properties.filter(
        (property) => property.price <= budget
      );
    },
    sortByPrice: (state) => {
      state.filteredProperties.sort((a, b) => a.price - b.price);
    },
    sortByLocation: (state, action) => {
      const location = action.payload;
      state.filteredProperties = state.properties.filter(
        (property) => property.location === location
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
        state.filteredProperties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProperty.pending, (state) => {
        state.loading = true; // Set loading to true when adding a property
      })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when done
        state.properties.push(action.payload); // Add the new property to the list
        state.filteredProperties.push(action.payload); // Update filtered properties if needed
      })
      .addCase(addProperty.rejected, (state, action) => {
        state.loading = false; // Set loading to false if there is an error
        state.error = action.error.message; // Store error message
      });
  },
});

// Export the actions
export const { filterByPrice, sortByPrice, sortByLocation } = propertySlice.actions;

// Export the reducer
export default propertySlice.reducer;
