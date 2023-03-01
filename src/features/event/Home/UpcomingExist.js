import React from 'react';
import classnames from "classnames";
import {useDispatch} from "react-redux";
import {changeStep} from "../eventSlice";
import {eventStep} from "../../../app/status";
import calendar from "../../../assets/icons/calendar.png";


export default function Home({upcoming}) {
  const dispatch = useDispatch();
  const classNames = classnames({
    "flex flex-row items-center": true
  });

  const createTodo = () => {
    dispatch(changeStep(eventStep.CREATE_NEW_EVENT.SELECT_EVENT_TYPE));
  }

  return (
    <div className={classNames}>
      <div className="flex-1">
        <p className="font-bold">{upcoming.name}</p>
        <p className="text-xs mt-2">{remainingDayCalculator(upcoming.dateTime)} Days to go</p>
        <div className="text-xs mt-2">
          <p className="inline-block font-bold mr-9 text-lg">0
            <p className="font-normal text-xs">Done</p>
          </p>
          <p className="inline-block font-bold text-lg">5
            <p className="font-normal text-xs">To Do</p>
          </p>
        </div>
      </div>
      <img src={calendar}/>
    </div>
  );
}

function remainingDayCalculator(time) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date();
  const secondDate = new Date(time);

  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}