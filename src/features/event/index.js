import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classnames from "classnames";
import Navigator from "./navigator"
import Forms from "./forms";
import Home from "./Home";
import {selectEvent} from './eventSlice';
import {eventStep} from '../../app/status';


export default function Index() {
  const event = useSelector(selectEvent);
  const {step} = event;
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });

  return (
    <div className={classNames}>
      {step == eventStep.INTRO && <Home/>}
      <Forms/>
    </div>
  );
}



