import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCours } from "../slices/CoursSlice";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const CoursFrench = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCours());
  }, [dispatch]);
  const { coursList } = useSelector((state) => state.cours);
  return (
    <div className="allCours">
      {coursList &&
        coursList.map((cours) => (
          <div key={cours._id} ref={ref} className="coursePage">
            <div className="courseGroup">
              {cours.title !== "Anglais" ? (
                <>
                  <div className="ownerCrs">
                    <h1>instructeur | {cours.owner.firstName}</h1>
                    <h1>{cours.owner.lastName}</h1>
                  </div>
                  <h1 className="title">{cours.title}</h1>
                  <p className="coursText">{cours.coursPdf}</p>
                  <iframe
                    width="420"
                    height="345"
                    src={cours.coursVideo}
                  ></iframe>
                </>
              ) : null}
            </div>
          </div>
        ))}
      <Pdf targetRef={ref} filename="Cours.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </div>
  );
};

export default CoursFrench;
