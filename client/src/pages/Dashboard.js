import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProfile, deleteProfile } from "../slices/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProfile());
  }, []);
  const { userList } = useSelector((state) => state.user);
  return (
    <div class="card shadow-lg">
      <div class="card-body">
        <div class="basis-member staff">
          <div class="container">
            <div class="row">
              {userList &&
                userList.map((user) => (
                  <div class="col-lg-3 blockDash" ey={user._id}>
                    <div class="card member-box shadow-lg">
                      <span class="shape"></span>
                      <img class="card-img-top" src={user.profilePic} alt="" />
                      <div class="card-body">
                        <span class="member-degignation">
                          <h3>{user.firstName}</h3>
                        </span>
                        <h4 class="member-title">{user.email}</h4>
                        <p class="roleUser">{user.role}</p>
                        {user.role !== "admin" ? (
                          <button
                            className="btnDeleteUser"
                            onClick={() => dispatch(deleteProfile(user._id))}
                          >
                            Delete
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
