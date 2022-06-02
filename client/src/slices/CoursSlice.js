import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// getCours
export const getCours = createAsyncThunk(
  "cours/getCours",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/user/getCours",
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
export const addCours = createAsyncThunk(
  "cours/addCours",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.post("http://localhost:5000/api/user/addCours", info.data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return dispatch(getCours());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// remouveCours
export const remouveCours = createAsyncThunk(
  "cours/remouveCoursk",
  async (coursId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        ` http://localhost:5000/api/user/RemouveCours/${coursId}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(getCours());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// updateCours
export const updateCours = createAsyncThunk(
  "cours/updateCours",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(
        ` http://localhost:5000/api/user/updateCours/${info._id}`,
        info,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(getCours());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
const coursSlice = createSlice({
  name: "cours",
  initialState: {
    loading: false,
    coursList: [],
    coursInfo: {},
    errors: null,
  },
  extraReducers: {
    [addCours.fulfilled]: (state, action) => {
      state.coursList = action.payload;
    },
    [addCours.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [getCours.pending]: (state) => {
      state.loading = true;
    },
    [getCours.fulfilled]: (state, action) => {
      state.coursList = action.payload;
      state.errors = null;
      state.loading = false;
    },
    [getCours.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
    [remouveCours.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default coursSlice.reducer;
