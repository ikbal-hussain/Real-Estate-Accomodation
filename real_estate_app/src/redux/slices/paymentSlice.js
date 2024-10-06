import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Razorpay from 'razorpay';

// Process payment
export const processPayment = createAsyncThunk('payment/processPayment', async (paymentData) => {
  const rzp = new Razorpay({
    key: 'YOUR_RAZORPAY_KEY', // Razorpay Key
    amount: paymentData.amount,
    currency: 'INR',
  });
  rzp.open();
});

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    paymentStatus: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(processPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(processPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentStatus = action.payload;
      })
      .addCase(processPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
