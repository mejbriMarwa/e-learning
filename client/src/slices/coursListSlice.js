import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// getCours
export const getCoursList = createAsyncThunk(
  "coursList/getCoursList",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/user/getCoursList",
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// addCours
export const addCoursList = createAsyncThunk(
  "coursList/addCoursList",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.post(
        "http://localhost:5000/api/user/addCoursList",
        info.data,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(getCoursList());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// remouveCours
export const remouveCoursList = createAsyncThunk(
  "coursList/remouveCoursList",
  async (coursListId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        ` http://localhost:5000/api/user/RemouveCoursList/${coursListId}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(getCoursList());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// updateCours
export const updateCoursList = createAsyncThunk(
  "coursList/updateCoursList",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(
        ` http://localhost:5000/api/user/updateCoursList/${info._id}`,
        info,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(getCoursList());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
const coursListSlice = createSlice({
  name: "coursList",
  initialState: {
    loading: false,
    listCourses: [],
    coursListInfo: {},
    errors: null,
  },
  extraReducers: {
    [addCoursList.fulfilled]: (state, action) => {
      state.listCourses = action.payload;
    },
    [addCoursList.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [getCoursList.pending]: (state) => {
      state.loading = true;
    },
    [getCoursList.fulfilled]: (state, action) => {
      state.listCourses = action.payload;
      state.errors = null;
      state.loading = false;
    },
    [getCoursList.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
    [remouveCoursList.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default coursListSlice.reducer;
