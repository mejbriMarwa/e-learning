import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostulation, deletePostulation } from "../slices/postulerSlice";
import check from "./check.png";
const Candidates = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostulation());
  }, [dispatch]);

  const { isAuth, role } = useSelector((state) => state.user);
  const { postList } = useSelector((state) => state.postuler);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    alert("success you added a candidate");
  };
  
  return (
    <div className="postulePage">
      {postList &&
        postList.map((postuler) => (
          <div key={postuler._id} className="candidat-GR">
            <h1>Candidates</h1>
            {isAuth && role === "admin" ? (
              <div className="postulerGroup candidat-box">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="postuler"
                  checked={isChecked}
                  onChange={handleOnChange}
                />
                <a className="condidat-link" href={postuler.curriculumVitae}>
                  curriculumVitae
                </a>
                {isChecked ? (
                  <>
                    <img src={check} className="imgCheck" />
                  </>
                ) : null}
                <br />
                <button
                  class="noselect"
                  onClick={() => dispatch(deletePostulation(postuler._id))}
                >
                  Delete candidate
                </button>
                <br />
              </div>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default Candidates;
