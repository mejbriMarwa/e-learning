import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// registerUser
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/register",
        info.data
      );
      info.navigate("/LoginPage");
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// loginUser
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        info.data
      );
      if (data.role === "user") {
        info.navigate("/Profile");
      }
      if (data.role === "admin") {
        info.navigate("/Dashboard");
      }
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// load user information
export const loadUserInfo = createAsyncThunk(
  "user/loadUserInfo",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/user/personInfo",
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
// get all Profile
export const GetAllProfile = createAsyncThunk(
  "user/GetAllProfile",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/user/allProfile",
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
// deleteProfile
export const deleteProfile = createAsyncThunk(
  "user/updateProfile",
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.delete(
        ` http://localhost:5000/api/user/deleteProfile/${userId}`,

        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(GetAllProfile());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

// update Profile
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(
        ` http://localhost:5000/api/user/updateProfile/${info._id}`,
        info,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(loadUserInfo());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// update profile picture
export const updateProfilePicture = createAsyncThunk(
  "user/updateProfilePicture",
  async (file, { rejectWithValue, dispatch }) => {
    try {
      const formPic = new FormData();
      formPic.append("profilePicture", file);
      await axios.put("http://localhost:5000/api/user/profilePic", formPic, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return dispatch(loadUserInfo());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
    userInfo: {},
    token: localStorage.getItem("token") || null,
    isAuth: Boolean(localStorage.getItem("isAuth")) || false,
    errors: null,
    role: localStorage.getItem("role") || null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuth = false;
      state.role = "";
      localStorage.clear();
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.msg = action.payload.msg;
    },
    [registerUser.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
    },
    [loginUser.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [loadUserInfo.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    [loadUserInfo.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    [updateProfile.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [GetAllProfile.fulfilled]: (state, action) => {
      state.userList = action.payload;
    },
    [GetAllProfile.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
