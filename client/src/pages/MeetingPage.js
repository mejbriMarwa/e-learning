import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeeting, remouveMeeting } from "../slices/MeetingSlice";
import { loadUserInfo } from "../slices/userSlice";
import meetinImg from "./meetinImg.jpg";

const MeetingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeeting());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const { meetingList } = useSelector((state) => state.meeting);
  const { isAuth, role } = useSelector((state) => state.user);
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className="meetingPage">
      <div
        className="meetinImgBag"
        style={{ backgroundImage: `url(${meetinImg})` }}
      ></div>
      <div className="bg-text">
        {meetingList &&
          meetingList.map((meeting) => (
            <div key={meeting._id} className="meetingBox">
              {meeting.owner.email === userInfo.email ? (
                
                <div className="meetingGroup">
                  <div className="meetingTitle">
                    <h1>{meeting.owner.firstName}</h1>
                    <h1>{meeting.owner.lastName}</h1>
                  </div>
                  <a href={meeting.meeetnigLink}>meeetnigLink</a> <br />
                  <button
                    class="meetingBtn"
                    onClick={() => dispatch(remouveMeeting(meeting._id))}
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MeetingPage;
