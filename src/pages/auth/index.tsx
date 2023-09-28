import Details from "@details/Details";
import Login from "@root/features/admin/auth/Login";
import Register from "@root/features/admin/auth/Register";
import React, { useState } from "react";

function AuthPage() {
  return (
    <React.Fragment>
      <Login />
      <Register />
    </React.Fragment>
  );
}

export default AuthPage;
