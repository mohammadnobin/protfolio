// this is mainlayouts
import React from "react";
import { Outlet, ScrollRestoration } from "react-router";;

const RootLoayout = () => {
  return (
    <div>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default RootLoayout;
