import React from 'react';
import classnames from "classnames";
import {eventStep} from '../../../app/status';
import Upcoming from "./Upcoming";
import Previous from "./Previous";
import Profile from "./Profile";


export default function Home() {
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });
  return (
    <div className={classNames}>
      <Profile/>
      <Upcoming/>
      <Previous/>
    </div>
  );
}



