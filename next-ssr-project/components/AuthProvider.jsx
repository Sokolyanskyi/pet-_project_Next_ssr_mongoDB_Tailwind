"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
/* eslint-disable react/prop-types */

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
