import React from 'react';
import classnames from "classnames";
import Upcoming from "./Upcoming";
import Previous from "./Previous";
import Profile from "./Profile";


export default function Home() {
  const classNames = classnames({
  });
  return (
    <div className={classNames}>
      <Profile/>
      <Upcoming/>
      <Previous/>
    </div>
  );
}



