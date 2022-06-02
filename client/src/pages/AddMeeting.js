import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMeeting } from "../slices/MeetingSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddMeeting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { errors: meetingError } = useSelector((state) => state.meeting);
  const handleAddMeeting = (data) => {
    dispatch(addMeeting({ data, navigate }));
    alert("meeting added");
  };
  const { isAuth, role } = useSelector((state) => state.user);
  return (
    <div className="AddCours">
      {isAuth && role === "instructor" ? (
        <form class="card" onSubmit={handleSubmit(handleAddMeeting)}>
          <header class="card__header">
            <h2> Add meetting</h2>
          </header>

          <section class="card__content">
            <div class="card__columns card__fill-space">
              <div class="card__66 card__fill-space">
                <span class="card__input-group">
                  <label>meeting</label>
                  <input
                    name="meeetnigLink"
                    type="url"
                    pattern="https://.*"
                    {...register("meeetnigLink")}
                  />
                </span>
              </div>
            </div>
          </section>
          <footer class="card__footer">
            <button class="card__form-action" type="submit">
              Add meetting
            </button>
          </footer>
        </form>
      ) : null}
    </div>
  );
};

export default AddMeeting;
