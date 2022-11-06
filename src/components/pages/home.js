import React, { Fragment } from "react";
import Search from "../users/search";
import Users from "../users/Users";

const home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
      <h1>Input your Github Username, Access your Account</h1> <br></br>
    </Fragment>
  );
};
export default home;
