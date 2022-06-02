import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// getFeedBack
export const getFeedBack = createAsyncThunk(
  "feddBack/getFeedBack",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/user/getFeedBack",
        info
      );
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// addFeedBack
export const addFeedBack = createAsyncThunk(
  "feedBack/addFeedBack",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await axios.post("http://localhost:5000/api/user/addFeedBack", data);
      return dispatch(getFeedBack());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// remouveFeedBack
export const remouveFeedBack = createAsyncThunk(
  "feedBack/remouveFeedBack",
  async (feedBackId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        ` http://localhost:5000/api/user/remouveFeedBack/${feedBackId}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(getFeedBack());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
const feedBackSlice = createSlice({
  name: "feedBack",
  initialState: {
    loading: false,
    feedBackList: [],
    feedBackInfo: {},
    errors: null,
  },
  extraReducers: {
    [addFeedBack.fulfilled]: (state, action) => {
      state.feedBackList = action.payload;
    },
    [addFeedBack.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [getFeedBack.pending]: (state) => {
      state.loading = true;
    },
    [getFeedBack.fulfilled]: (state, action) => {
      state.feedBackList = action.payload;
      state.errors = null;
      state.loading = false;
    },
    [getFeedBack.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
    [remouveFeedBack.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default feedBackSlice.reducer;
