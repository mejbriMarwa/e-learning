import React, { useEffect, useState } from "react";
import drappeau from "./drappeau.png";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getFeedBack, remouveFeedBack } from "../slices/FeedBackSlice";
import { loadUserInfo } from "../slices/userSlice";
import angry from "../pages/angry.png";
import sad from "../pages/sad.png";
import smile from "../pages/smile.png";
const Footer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedBack());
    dispatch(loadUserInfo());
  }, [dispatch]);
  const { userInfo } = useSelector((state) => state.user);
  const { feedBackList } = useSelector((state) => state.feedBack);
  return (
    <div className="newsFooter">
      <div className="FG">
        <div className="FG1">
          <p>E-learnin Plateforme</p>
          <h3>Tunisie</h3>
        </div>
        <div className="FG2">
          <p>Training</p>
          <form>
            <label for="Formation">Choisissez vos horaires</label>
            <select name="Formation" id="Formation">
              <option value="Cours du soir">Cours du soir</option>
              <option value="Summer Academy">Summer Academy</option>
              <option value="Cours du week-end">Cours du week-end</option>
            </select>
          </form>
          <br />
          <span>En Ligne</span>
        </div>
      </div>
      <div className="FRLinkG">
        <div className="FRLinkG1">
          <h2>Follow us</h2>
          <i>
            {" "}
            <AiFillFacebook />
          </i>
          <i>
            <AiOutlineInstagram />
          </i>
        </div>
        <div className="FRLinkG2">
          <img src={drappeau} alt="drappeau" />
          <h6>Tunisie</h6>
        </div>
      </div>
      <div className="FooterContact">
        {feedBackList &&
          feedBackList.map((f) => (
            <div key={f._id}>
              <div className="msg">
                <p>
                  {f.name}: {f.message}
                </p>
                {f.image === "smile" ? (
                  <img src={smile} />
                ) : f.image === "sad" ? (
                  <img src={sad} />
                ) : f.image === "angry" ? (
                  <img src={angry} />
                ) : null}{" "}
              </div>

              {userInfo.role === "admin" ? (
                <button
                  class="btn btn-outline-secondary"
                  onClick={() => dispatch(remouveFeedBack(f._id))}
                >
                  DELETE
                </button>
              ) : null}
            </div>
          ))}
      </div>
      <p className="Copyright"> &copy; Copyright 2022 e-learning </p>
    </div>
  );
};

export default Footer;
