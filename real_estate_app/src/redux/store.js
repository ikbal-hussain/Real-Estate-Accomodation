import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import propertyReducer from './slices/propertySlice';
import reviewReducer from './slices/reviewSlice';
// import contactReducer from './slices/contactSlice';
import adminReducer from './slices/adminSlice';
import paymentReducer from './slices/paymentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    properties: propertyReducer,
    reviews: reviewReducer,
    // contact: contactReducer,
    admin: adminReducer,
    payment: paymentReducer,
  },
});
