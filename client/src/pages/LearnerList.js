import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProfile } from "../slices/userSlice";

const LearnerList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProfile());
  }, []);
  const { userList } = useSelector((state) => state.user);
  return (
    <div>
      {userList &&
        userList.map((user) => (
          <div key={user._id}>
            <img
              src={user.profilePic}
              alt="profilePic"
              style={{ width: "20%" }}
            />
            <h6>firstName :{user.firstName}</h6>
            <h6>lastName :{user.lastName}</h6>
            <h6>email :{user.email}</h6>
          </div>
        ))}
    </div>
  );
};

export default LearnerList;
