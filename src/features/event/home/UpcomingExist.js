import React from 'react';
import classnames from "classnames";
import {useDispatch} from "react-redux";
import {changeSelectedEvent, changeStep} from "../eventSlice";
import {eventStep} from "../../../app/status";
import calendar from "../../../assets/icons/calendar.png";
import {remainingDayCalculator} from "../../../utils";


export default function Home({upcoming}) {
  const dispatch = useDispatch();
  const classNames = classnames({
    "flex flex-row items-center cursor-pointer": true
  });

  const createTodo = () => {
    dispatch(changeStep(eventStep.CHECKLIST));
    dispatch(changeSelectedEvent(upcoming));
  }

  const checked = upcoming.checkList.filter(e => e.checked);
  const remaining = remainingDayCalculator(upcoming.dateTime)

  return (
    <div className={classNames} onClick={createTodo}>
      <div className="flex-1">
        <p className="font-bold">{upcoming.name}</p>
        <p className="text-xs mt-2">{remaining > 0 ? `${remaining} Days to go`: "Today!"}</p>
        <div className="text-xs mt-2">
          <div className="inline-block font-bold mr-9 text-lg">{checked.length}
            <p className="font-normal text-xs">Done</p>
          </div>
          <div className="inline-block font-bold text-lg">{upcoming.checkList.length}
            <p className="font-normal text-xs">To Do</p>
          </div>
        </div>
      </div>
      <img src={calendar}/>
    </div>
  );
}