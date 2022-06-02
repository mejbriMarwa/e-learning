import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// getChat
export const GetChat = createAsyncThunk(
  "chat/GetChat",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/user/getChat",
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
// addChat
export const addChat = createAsyncThunk(
  "chat/addChat",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.post("http://localhost:5000/api/user/addChat", info.data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return dispatch(GetChat());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// remouveChat
export const remouveChat = createAsyncThunk(
  "chat/remouvechat",
  async (chatId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        ` http://localhost:5000/api/user/deleteChat/${chatId}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(GetChat());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    loading: false,
    chatList: [],
    errors: null,
  },
  extraReducers: {
    [addChat.fulfilled]: (state, action) => {
      state.chatList = action.payload;
    },
    [addChat.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [GetChat.pending]: (state) => {
      state.loading = true;
    },
    [GetChat.fulfilled]: (state, action) => {
      state.chatList = action.payload;
      state.errors = null;
      state.loading = false;
    },
    [GetChat.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
    [remouveChat.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default chatSlice.reducer;
