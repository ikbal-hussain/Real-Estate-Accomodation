import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProperties = createAsyncThunk('properties/fetchProperties', async () => {
  const response = await axios.get('https://real-estate-app-d5038-default-rtdb.asia-southeast1.firebasedatabase.app/propertiesData.json');
  console.log("response", response.data)
  return response.data;
});

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
      state.filteredProperties = state.properties.filter((property) => property.price <= budget);
    },
    sortByPrice: (state) => {
      state.filteredProperties.sort((a, b) => a.price - b.price);
    },
    sortByLocation: (state, action) => {
      const location = action.payload;
      state.filteredProperties = state.properties.filter((property) => property.location === location);
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
        state.error = action.payload;
      });
  },
});

export const { filterByPrice, sortByPrice, sortByLocation } = propertySlice.actions;

export default propertySlice.reducer;
