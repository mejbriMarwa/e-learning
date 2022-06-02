import React from "react";

const ForgetPassword = () => {
  
  return (
    <div>
      <form>
        <h1>Enter your email</h1>

        <input type="text" placeholder="Email" required />

        <br />
        <button type="submit">verifier your email</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
