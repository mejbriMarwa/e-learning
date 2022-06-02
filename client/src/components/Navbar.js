import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth, role, userInfo } = useSelector((state) => state.user);
  return (
    <div className="Pagenavbar">
      <nav class="navbar">
        <div class="logo">
          <Link to="/">E-learning</Link>
        </div>

        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>

          <div class="menu">
            <li>
              <Link to="/" className="activeNav">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="LinksNav">
                About
              </Link>
            </li>
            <li>
              <Link to="/Planning" className="LinksNav">
                Planning
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="LinksNav">
                FeddBack
              </Link>
            </li>
            {isAuth && role === "user" ? (
              <>
                <li class="services">
                  <Link to="/Profile" className="LinksNav">
                    {userInfo.firstName}
                  </Link>
                  <ul class="dropdown">
                    {isAuth && (
                      <li onClick={() => dispatch(logout())}>logOut</li>
                    )}
                  </ul>
                </li>
              </>
            ) : null}
            {isAuth && role === "admin" ? (
              <>
                <li class="services">
                  <Link to="/Profile" className="LinksNav">
                    {userInfo.firstName}
                  </Link>
                  <ul class="dropdown">
                    <li>
                      <Link to="/Dashboard" className="LinksNav">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/AllCours" className="LinksNav">
                        Cours
                      </Link>
                    </li>
                    <li>
                      <Link to="/ChatPage" className="LinksNav">
                        Complaint
                      </Link>
                    </li>
                    <li>
                      <Link to="/AllMeeting" className="LinksNav">
                        Meeting
                      </Link>
                    </li>
                    <li>
                      <Link to="/Candidates" className="LinksNav">
                        Candidates
                      </Link>
                    </li>
                    {isAuth && (
                      <li onClick={() => dispatch(logout())}>logOut</li>
                    )}
                  </ul>
                </li>
              </>
            ) : isAuth && role === "learner" ? (
              <>
                <li class="services">
                  <Link to="/Profile" className="LinksNav">
                    {userInfo.firstName}
                  </Link>
                  <ul class="dropdown">
                    <li>
                      <Link to="/AllCours" className="LinksNav">
                        List of courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/ChatInstructor" className="LinksNav">
                        Complaint
                      </Link>
                    </li>
                    <li>
                      <Link to="/AllMeeting" className="LinksNav">
                        Meeting
                      </Link>
                    </li>
                    <li>
                      <Link to="/Payment" className="LinksNav">
                        Payment
                      </Link>
                    </li>
                    {isAuth && (
                      <li onClick={() => dispatch(logout())}>logOut</li>
                    )}
                  </ul>
                </li>
              </>
            ) : isAuth && role === "instructor" ? (
              <>
                <li class="services">
                  <Link to="/Profile" className="LinksNav">
                    {userInfo.firstName}
                  </Link>
                  <ul class="dropdown">
                    <li>
                      <Link to="/AddCours" className="LinksNav">
                        Add courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/Cours" className="LinksNav">
                        Cours
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/ChatInstructor" className="LinksNav">
                        Complaint
                      </Link>
                    </li>
                    <li>
                      <Link to="/MeetingPage" className="LinksNav">
                        MeetingPage
                      </Link>
                    </li>

                    <li>
                      <Link to="/AddMeeting" className="LinksNav">
                        AddMeeting
                      </Link>
                    </li>
                    {isAuth && (
                      <li onClick={() => dispatch(logout())}>logOut</li>
                    )}
                  </ul>
                </li>
              </>
            ) : null}
            {!isAuth ? (
              <>
                <li>
                  <Link to="/LoginPage" className="LinkBtn">
                    Login
                  </Link>
                </li>
              </>
            ) : null}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
