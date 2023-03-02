import React from 'react';
import classnames from "classnames";
import {useSelector} from "react-redux";
import {remainingDayCalculator} from "../../../utils";
import {selectEvent} from "../eventSlice";


export default function Summary() {
  const event = useSelector(selectEvent);
  const {selectedEvent} = event;
  const classNames = classnames({
    "flex flex-row": true
  });
  const remaining = remainingDayCalculator(selectedEvent.dateTime);
  const checked = selectedEvent.checkList.filter(e => e.checked);
  return (
    <div className={classNames}>
      <div className="inline-block flex-1 font-bold mr-9 text-lg">{selectedEvent.name}
        <p className="font-normal text-xs">{remaining > 0 ? `${remaining} Days to go`: "Today!"}</p>
      </div>
      <div className="inline-block font-bold mr-9 text-lg">{selectedEvent.checkList.length}
        <p className="font-normal text-xs">To Do</p>
      </div>
      <div className="inline-block font-bold  text-lg">{checked.length}
        <p className="font-normal text-xs">Done</p>
      </div>
    </div>
  );
}