import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUserInfo,
  updateProfile,
  updateProfilePicture,
} from "../slices/userSlice";
import camera from "./camera.png";
import ok from "./ok.png";
const Profile = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, role, profilePic } = useSelector(
    (state) => state.user.userInfo
  );
  const [file, setFile] = useState({});
  useEffect(() => {
    dispatch(loadUserInfo());
  }, []);
  const [input, setInput] = useState({});
  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile(input));
  };
  const handleImageUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProfilePicture(file));
  };
  return (
    <div className="ProfileCard">
      <div className="ProfilePart1">
        <div class="profile-pic">
          <label class="-label" for="file">
            <span class="glyphicon glyphicon-camera"></span>
            <span>Change Image</span>
          </label>
          <input
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <img src={profilePic} id="output" width="200" />
        </div>

        <button onClick={handleImageUpdate}>
          <img src={camera} />
        </button>
      </div>
      <div className="ProfilePart2">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="firstName"
            placeholder={firstName}
            onChange={onChangeHandler}
          />{" "}
          <br />
          <input
            type="text"
            name="lastName"
            placeholder={lastName}
            onChange={onChangeHandler}
          />{" "}
          <br />
          <input
            type="email"
            name="email"
            placeholder={email}
            onChange={onChangeHandler}
          />{" "}
          <br />
          <input type="text" name="role" value={role} />
          <br />
          {/*   <button>Update profile</button>*/}
          <button>
            <span class="label">Update profile</span>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
