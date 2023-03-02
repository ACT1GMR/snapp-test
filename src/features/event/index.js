import React from 'react';
import {useSelector} from 'react-redux';
import {selectEvent} from './eventSlice';
import {eventStep} from '../../app/status';
import classnames from "classnames";
import Forms from "./forms";
import Home from "./home";
import Checklist from "./checklist";

export default function Index() {
  const event = useSelector(selectEvent);
  const {step} = event;
  const classNames = classnames({
    "bg-black h-full w-full md:max-h-sm md:max-w-sm p-4 relative": true
  });
  return (
    <div className={classNames}>
      {step === eventStep.INTRO ? <Home/> : step === eventStep.CHECKLIST ? <Checklist/> : <Forms/>}
    </div>
  );
}