import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin";
import AuthPage from "./pages/auth";
import Home from "./pages/home";
import RouterLayout from "./shared/RouterLayout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};
