import React from "react";
import { getCoursList, updateCoursList } from "../slices/coursListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUserInfo } from "../slices/userSlice";
const AllCours = () => {
  let hours = new Date().getHours();
  let dates = new Date().toString();
  let d = new Date();
  let month = d.getMonth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoursList());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const { userInfo } = useSelector((state) => state.user);
  const { listCourses } = useSelector((state) => state.coursList);

  const handleRegister = (e, coursList) => {
    e.preventDefault();
    dispatch(updateCoursList({ _id: coursList._id }));
  };
  return (
    <div className="cours-page">
      {listCourses &&
        listCourses.map((coursList) => (
          <div key={coursList._id} className="cours-box">
            <h1>{coursList.title}</h1>
            {!coursList.coursAvailable ? (
              <div className="groupCours1">
                <h3 className="choose-cours" style={{ color: "#D82148" }}>you are chosen this course</h3>
                {coursList.title === "french" ? (
                  <>
                    <a href="/CoursFrench" data-hover="French">
                      Francais
                    </a>
                  </>
                ) : coursList.title === "English" ? (
                  <>
                    <a href="/CoursEnglish" data-hover="development">
                      Anglais
                    </a>
                  </>
                ) : coursList.title === "Development" ? (
                  <>
                    <a href="/Coursdevelopment" data-hover="development">
                      development
                    </a>
                  </>
                ) : coursList.title === "Management" ? (
                  <>
                    <a href="/CoursManagement" data-hover="Management">
                      Management
                    </a>
                  </>
                ) : null}
              </div>
            ) : (
              <>
                <h3 className="choose-cours">Choose course</h3>
                <button
                  className="btnChoose-cours"
                  onClick={(e) => handleRegister(e, coursList)}
                >
                  choose cours
                </button>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default AllCours;
