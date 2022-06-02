import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// getMeeting
export const getMeeting = createAsyncThunk(
  "meeting/getMeeting",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/user/getMeeting",
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
// addMeeting
export const addMeeting = createAsyncThunk(
  "meeting/addMeeting",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.post("http://localhost:5000/api/user/addMeeting", info.data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return dispatch(getMeeting());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// remouveMeeting
export const remouveMeeting = createAsyncThunk(
  "meeting/remouveCoursk",
  async (meetingId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        ` http://localhost:5000/api/user/RemouveMeeting/${meetingId}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(getMeeting());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// updateMeeting
export const updateMeeting = createAsyncThunk(
  "meeting/updateMeeting",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(
        ` http://localhost:5000/api/user/updateMeeting/${info._id}`,
        info,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(getMeeting());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
const meetingSlice = createSlice({
  name: "meeting",
  initialState: {
    loading: false,
    meetingList: [],
    meetingInfo: {},
    errors: null,
  },
  extraReducers: {
    [addMeeting.fulfilled]: (state, action) => {
      state.meetingList = action.payload;
    },
    [addMeeting.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [getMeeting.pending]: (state) => {
      state.loading = true;
    },
    [getMeeting.fulfilled]: (state, action) => {
      state.meetingList = action.payload;
      state.errors = null;
      state.loading = false;
    },
    [getMeeting.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
    [remouveMeeting.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default meetingSlice.reducer;
