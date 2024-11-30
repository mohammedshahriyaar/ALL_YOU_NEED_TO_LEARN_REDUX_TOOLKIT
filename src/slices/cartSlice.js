
// import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchCarts = createAsyncThunk(
//   'carts/fetchCarts',
//   async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       if (!response.ok) {
//         throw new Error('Failed to fetch carts');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log(error)
//       return error;
//     }
//   }
// );


// const cartSlice = createSlice({
//   name: 'carts',
//   initialState: {
//     cartItems: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCarts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCarts.fulfilled, (state, action) => {
//         console.log(action.payload)
//         state.loading = false;
//         state.cartItems = action.payload;
//       })
//       .addCase(fetchCarts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const cartReducer = cartSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for fetching carts
export const fetchCarts = createAsyncThunk('carts/fetchCartItems', async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch carts');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Thunk for adding a cart item
export const addCartItem = createAsyncThunk('carts/addCartItem', async (newItem) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    if (!response.ok) {
      throw new Error('Failed to add cart item');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    cartItems: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetch carts
      .addCase(fetchCarts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle add cart item
      .addCase(addCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems.push(action.payload); // Add the new item to the list
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const cartReducer = cartSlice.reducer;

