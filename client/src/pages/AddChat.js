import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../slices/chatSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddChat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { errors: chatError } = useSelector((state) => state.chat);
  const handleAddChat = (data) => {
    dispatch(addChat({ data, navigate }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleAddChat)}>
        <input
          type="text"
          name="mesagge"
          placeholder="your message ..."
          {...register("mesagge", { required: true })}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AddChat;
