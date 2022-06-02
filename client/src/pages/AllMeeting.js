import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeeting } from "../slices/MeetingSlice";
import { loadUserInfo } from "../slices/userSlice";
import meetinImg from "./meetinImg.jpg";

const AllMeeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeeting());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const { meetingList } = useSelector((state) => state.meeting);
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
              <div className="meetingGroup">
                <div className="meetingTitle">
                  <h1>{meeting.owner.firstName}</h1>
                  <h1>{meeting.owner.lastName}</h1>
                </div>
                <a href={meeting.meeetnigLink}>meeetnigLink</a> <br />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllMeeting;
