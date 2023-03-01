import React, {useEffect} from 'react';
import classnames from "classnames";
import {useSelector} from "react-redux";
import {selectEvent} from "../eventSlice";
import {eventStep} from '../../../app/status';

export default function Progress() {
  const event = useSelector(selectEvent);
  const {step} = event;
  const classNames = classnames({
    "mt-4": true
  });
  const progress =`${eventStep.getStepProgress(step)}%`;
  return (
    <div className={classNames}>
      <div className="w-full bg-neutral-900 h-0.5">
        <div className="bg-blue-400 h-0.5 transition-all" style={{width: progress}}/>
      </div>
    </div>
  );
}