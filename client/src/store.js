import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import feedBackReducer from "./slices/FeedBackSlice";
import coursSlice from "./slices/CoursSlice";
import chatSlice from "./slices/chatSlice";
import MeetingSlice from "./slices/MeetingSlice";
import postulerSlice from "./slices/postulerSlice";
import coursListSlice from "./slices/coursListSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    feedBack: feedBackReducer,
    cours: coursSlice,
    chat: chatSlice,
    meeting: MeetingSlice,
    postuler: postulerSlice,
    coursList: coursListSlice,
  },
});
