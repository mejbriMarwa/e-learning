import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetChat, remouveChat } from "../slices/chatSlice";
import { loadUserInfo } from "../slices/userSlice";
import AddChat from "./AddChat";
import deleteImg from "./deleteImg.png";

const ChatInstructor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetChat());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const { isAuth, role } = useSelector((state) => state.user);
  const { userInfo } = useSelector((state) => state.user);
  const { chatList } = useSelector((state) => state.chat);
  return (
    <div className="chatPage" id="wl_DIV_1">
      <div id="wl_DIV_3">
        <h1 id="wl_H1_2">Send your complaint to the administrator</h1>
        <div id="wl_DIV_4">
          <img
            src="http://resources.bigrock.in/temp/contactus/ico-contact-sales.gif"
            id="wl_IMG_6"
            alt=""
          />
          {chatList &&
            chatList.map((chat) => (
              <div key={chat._id} id="wl_DIV_7">
                {chat.owner.email === userInfo.email ? (
                  <div className="chatGroup">
                    <p id="wl_P_8">{chat.owner.firstName}</p>
                    <div id="wl_P_9">
                      <br />
                      <span id="wl_SPAN_12">{chat.mesagge}</span>
                      <br />
                      <button onClick={() => dispatch(remouveChat(chat._id))}>
                        <img src={deleteImg} alt="delete Pic" />
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
        </div>
        <div className="addChat">
          {(isAuth && role === "instructor") ||
          (isAuth && role === "learner") ? (
            <AddChat />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatInstructor;
