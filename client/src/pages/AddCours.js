import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCours } from "../slices/CoursSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddCours = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { errors: coursError } = useSelector((state) => state.cours);
  const handleAddCours = (data) => {
    dispatch(addCours({ data, navigate }));
    alert('success cours added');
  };
  const { isAuth, role } = useSelector((state) => state.user);
  return (
    <div className="AddCours">
      {isAuth && role === "instructor" ? (
        <form class="card" onSubmit={handleSubmit(handleAddCours)}>
          <header class="card__header">
            <h2> Add Course</h2>
          </header>

          <section class="card__content">
            <div class="card__columns card__fill-space">
              <div class="card__66 card__fill-space">
                <span class="card__input-group">
                  <label>title</label>
                  <input type="text" name="title" {...register("title")} />
                </span>

                <span class="card__input-group">
                  <label>Course text</label>
                  <input
                    type="text"
                    name="coursPdf"
                    {...register("coursPdf")}
                  />
                </span>
                <span class="card__input-group">
                  <label>course video</label>
                  <input
                    type="url"
                    pattern="https://.*"
                    name="coursVideo"
                    {...register("coursVideo")}
                  />
                </span>
              </div>
            </div>
          </section>
          <footer class="card__footer">
            <button class="card__form-action" type="submit">
              Add cours
            </button>
          </footer>
        </form>
      ) : null}
    </div>
  );
};

export default AddCours;
