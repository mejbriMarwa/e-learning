import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const PDF = (props) => {
  return (
    <div>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <p>{props.coursPdf}</p>
        <p>{props.coursVideo}</p>
      </div>
      <Pdf targetRef={ref} filename="cours.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </div>
  );
};

export default PDF;
