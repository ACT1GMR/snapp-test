import React from 'react';
import classnames from "classnames";
import {useSelector} from "react-redux";
import {selectEvent} from "../eventSlice";
import {eventStep, getLastValidEvent} from '../../../app/status';
import UpcomingExist from "./UpcomingExist";
import UpcomingNoExist from "./UpcomingNoExist";


export default function Home() {
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });
  const event = useSelector(selectEvent);
  const {step} = event;
  const lastValidEvent = getLastValidEvent();
  return (
    <div className={classNames}>
      {
        lastValidEvent ? <UpcomingExist upcoming={lastValidEvent}/> : <UpcomingNoExist/>
      }
    </div>
  );
}



