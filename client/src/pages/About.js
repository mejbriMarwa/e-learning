import React from "react";
import imgLearn from "./imgLearn.avif";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="AboutGroup">
      <div className="AboutG1">
        <img src={imgLearn} alt="imgLearn" />
      </div>
      <div className="AboutG2">
        <div className="wrapperAbout">
          <div className="static-txt">
            <h1>Learn</h1>
          </div>
          <ul className="dynamic-txts">
            <li>
              <span>language</span>
            </li>
            <li>
              <span>Management and trade</span>
            </li>
            <li>
              <span>Web development</span>
            </li>
            <li>
              <span>Computer science</span>
            </li>
          </ul>
        </div>
        <p className="ParaAbout">
          We train the next tech generation in the latest technologies and the
          jobs of the future to prepare them for the professional world and
          strengthen their employability.
        </p>
        <Link to="/Planning">
          <button className="BtnAboutG2"> Discover our programs</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
