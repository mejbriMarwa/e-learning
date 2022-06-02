import React from "react";
import { useNavigate } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CoursManagement = () => {
  const navigate = useNavigate();

  return (
    <div ref={ref} className="allCours">
      <div className="coursePage">
        <div className="courseGroup">
          <div className="ownerCrs">
            <h1>instructeur | firstName</h1>
            <h1>lastName</h1>
          </div>
          <h1 className="title">Cours Management</h1>
          <p className="coursText"></p>
        </div>
      </div>
      <Pdf targetRef={ref} filename="Cours.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </div>
  );
};

export default CoursManagement;
