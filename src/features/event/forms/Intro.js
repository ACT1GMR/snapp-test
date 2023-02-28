import React from 'react';
import classnames from "classnames";
import {eventStep} from '../../../app/status';
import Intro from "./Intro";
import Selections from "./Selections";
import Info from "./Info";
import Options from "./Options";


export default function Intro() {
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });
  const {CREATE_NEW_EVENT} = eventStep;
  return (
    <div className={classNames}>
      <Profile/>
    </div>
  );
}



