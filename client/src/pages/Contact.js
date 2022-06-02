import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addFeedBack } from "../slices/FeedBackSlice";
import angry from "./angry.png";
import sad from "./sad.png";
import smile from "./smile.png";

const Contact = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { errors: feedBackError } = useSelector((state) => state.feedBack);
  const [feeling, setFeeling] = useState();
  const handleFeeling = (f) => {
    setFeeling(f);
  };
  const feedBackInfo = (data) => {
    const info = { ...data, image: feeling };
    dispatch(addFeedBack(info));
    window.alert("success your feedback is added");
  };

  return (
    <div className="ContactPage">
      <div class="content">
        <div class="container">
          <div class="head">
            <div class="heading">
              <h1>Choose emoji</h1>
            </div>
          </div>

          <form form id="submit-form" onSubmit={handleSubmit(feedBackInfo)}>
            <div class="mid">
              <div class="media">
                <img
                  src={angry}
                  alt="moderate"
                  name="angry"
                  onClick={() => {
                    handleFeeling("angry");
                  }}
                />
              </div>

              <div class="media">
                <img
                  src={sad}
                  alt="neutral"
                  name="sad"
                  onClick={() => {
                    handleFeeling("sad");
                  }}
                />
              </div>
              <div class="media">
                <img
                  src={smile}
                  alt="smile"
                  name="smile"
                  onClick={() => {
                    handleFeeling("smile");
                  }}
                />
              </div>
            </div>

            <div class="textarea">
              <p>Share your Feed-Back</p>
              <input
                id="name"
                className=""
                type="text"
                placeholder="Your Name*"
                {...register("name", { required: true })}
              />
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="Let we know..."
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div class="end">
              <div class="submission">
                <button class="sub btn">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
