import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetChat, remouveChat } from "../slices/chatSlice";
import { loadUserInfo } from "../slices/userSlice";
import AddChat from "./AddChat";
import ChatInstructor from "./ChatInstructor";
import chg from "./chg.png";
const ChatPage = () => {
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
    <div className="ChatAdminPage">
      {chatList &&
        chatList.map((chat) => (
          <div key={chat._id} class="card">
            {isAuth && role === "admin" ? (
              <div class="card_content">
                <div class="card_icon">
                  <img src={chg} alt="chG" />
                  <p class="card_title"> complaint </p>
                </div>
                <div class="card_body">
                  <p>
                    {chat.owner.firstName}
                    <br />
                    {chat.mesagge}
                  </p>
                </div>
              </div>
            ) : null}
            <div class="card_layout"></div>
          </div>
        ))}
    </div>
  );
};

export default ChatPage;
