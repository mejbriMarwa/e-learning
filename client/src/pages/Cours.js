import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCours, remouveCours } from "../slices/CoursSlice";
import { loadUserInfo } from "../slices/userSlice";
import AddCours from "./AddCours";

const Cours = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCours());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const { userInfo } = useSelector((state) => state.user);
  const { coursList } = useSelector((state) => state.cours);
  return (
    <div>
      {coursList &&
        coursList.map((cours) => (
          <div key={cours._id} className="coursePage">
            {cours.owner.email === userInfo.email ? (
              <div className="courseGroup">
                <div className="ownerCrs">
                  <h1>{cours.owner.firstName}</h1>
                  <h1>{cours.owner.lastName}</h1>
                </div>
                <h1 className="title">{cours.title}</h1>
                <p className="coursText">{cours.coursPdf}</p>
                <iframe
                  width="420"
                  height="345"
                  src={cours.coursVideo}
                ></iframe>

                <button
                  class="noselect"
                  onClick={() => dispatch(remouveCours(cours._id))}
                >
                  <span class="text">Delete</span>
                  <span class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default Cours;
