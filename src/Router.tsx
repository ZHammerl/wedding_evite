import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./features/admin/auth/Login";
import Register from "./features/admin/auth/Register";
import AdminPage from "./pages/admin";
import AuthPage from "./pages/auth";
import Home from "./pages/home";
import RouterLayout from "./shared/RouterLayout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<RouterLayout />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
