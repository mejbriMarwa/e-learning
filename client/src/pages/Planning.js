import React from "react";
import french from "./french.jpg";
import German from "./German.jpg";
import ComputerScience from "./ComputerScience.jpg";
import Management from "./Management.jpg";
import WebDevelopment from "./WebDevelopment.jpg";
import english from "./english.avif";
const Planning = () => {
  return (
    <div className="PlanningPage">
      <h1 className="titlePlan">DISCOVER OUR PROGRAMS</h1>
      <div className="PlanG1">
        <p>Initial training</p> <p>Continuing education</p>
      </div>
      <div className="PlanG2">
        {" "}
        <p>BTS (after BAC)</p> <p>BTP (BAC level)</p>{" "}
      </div>
      <div class="card-container">
        <div class="card">
          <div className="cardBlock">
            <h4>French</h4>
            <h3>Duration: 12 week</h3>
          </div>
          <img src={french} alt="" />
          <h5>BTP (BAC level)</h5>
        </div>

        <div class="card">
          <div className="cardBlock">
            <h4>English</h4>
            <h3>Duration: 12 week</h3>
          </div>
          <img src={english} alt="" />
          <h5>BTP (BAC level)</h5>
        </div>

        <div class="card">
          <div className="cardBlock">
            <h4>German</h4>
            <h3>Duration: 12 week</h3>
          </div>
          <img src={German} alt="" />
          <h5>BTP (BAC level)</h5>
        </div>

        <div class="card">
          <div className="cardBlock">
            <h4>Computer science</h4>
            <h3>Duration: 20 week</h3>
          </div>
          <img src={ComputerScience} alt="" />
          <h5>BTS (after BAC)</h5>
        </div>
        <div class="card">
          <div className="cardBlock">
            <h4>Management and trade</h4>
            <h3>Duration: 20 week</h3>
          </div>
          <img src={Management} alt="" />
          <h5>BTS (after BAC)</h5>
        </div>

        <div class="card">
          <div className="cardBlock">
            <h4>Web development</h4>
            <h3>Duration: 20 week</h3>
          </div>
          <img src={WebDevelopment} alt="" />
          <h5>BTS (after BAC)</h5>
        </div>
      </div>
    </div>
  );
};

export default Planning;
