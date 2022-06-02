import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// getPostulation
export const getPostulation = createAsyncThunk(
  "postuler/getPostulation",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/user/getPostulation"
      );
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// addPostulation
export const addPostulation = createAsyncThunk(
  "postuler/addPostulation",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      // const formData = new FormData();
      await axios.post(
        "http://localhost:5000/api/user/addPostulation",
       info
      );
      return dispatch(getPostulation());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// remouveChat
export const deletePostulation = createAsyncThunk(
  "postuler/deletePostulation",
  async (postId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        ` http://localhost:5000/api/user/deletePostulation/${postId}`
      );
      return dispatch(getPostulation());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const postulerSlice = createSlice({
  name: "postuler",
  initialState: {
    loading: false,
    postList: [],
    errors: null,
  },
  extraReducers: {
    [addPostulation.fulfilled]: (state, action) => {
      state.postList = action.payload;
    },
    [addPostulation.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [getPostulation.pending]: (state) => {
      state.loading = true;
    },
    [getPostulation.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.errors = null;
      state.loading = false;
    },
    [getPostulation.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
    [deletePostulation.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default postulerSlice.reducer;
