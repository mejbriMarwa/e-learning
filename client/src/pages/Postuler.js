import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPostulation } from "../slices/postulerSlice";
import { useForm } from "react-hook-form";

const Postuler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { errors: postulerError } = useSelector((state) => state.postuler);

  const handleAddCours = (data) => {
    dispatch(addPostulation({ data, navigate }));
    alert("success you added your Curriculum Vitae");
  };

  const { isAuth } = useSelector((state) => state.user);

  return (
    <div className="postulePage">
      {!isAuth ? (
        <div className="postulerGroup">
          <h1>Postuler</h1>
          <form onSubmit={handleSubmit(handleAddCours)}>
            <input
              type="url"
              name="curriculumVitae"
              placeholder="http://"
              {...register("curriculumVitae")}
              required
            />
            <br />
            <button type="submit">postuler</button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Postuler;
