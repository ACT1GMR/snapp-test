import React from 'react';
import {getLastOutDateEvent} from '../../../app/status';
import cake from "../../../assets/icons/cake.png";
import hearts from "../../../assets/icons/hearts.png";
import dishes from "../../../assets/icons/dishes.png";
import glasses from "../../../assets/icons/glasses.png";
import stars from "../../../assets/icons/starts.png";

const iconsMap = {
  "Birthday": cake,
  "Anniversary": hearts,
  "Dinner": dishes,
  "Meetup": glasses,
  "Other": stars
}

export default function Previous() {
  const outDatedEvents = getLastOutDateEvent(2);
  return (
    <div>
      <p className="mt-5 mb-2 font-bold w-full">Previous House Parties</p>
      {outDatedEvents ? <div className="grid gap-4 grid-cols-2">
          {
            outDatedEvents.map((evt, index) => {
              return <div
                className="flex flex-col cursor-pointer p-2 bg-neutral-800 rounded-md"
                key={evt.dateTime}>
                <img src={iconsMap[evt.occasion]} alt={evt.name}
                     className="self-start w-7 h-7 p-1 rounded-full ring-1 ring-neutral-300 dark:ring-neutral-500"/>
                <p className="font-bold text-sm mt-2">{evt.name}</p>
                <p className="text-xs text-neutral-400 mt-1 color-white">{getFormattedDate(evt.dateTime)}</p>
                <p className="text-xs text-neutral-400 mt-2">{getFormattedDate(evt.dateTime, true)}</p>
              </div>
            })}
        </div>
        :
        <p className="text-sm block w-full mt-6 text-center">There is no previous plan</p>
      }
    </div>
  );
}

function getFormattedDate(date, hour) {
  let dateCorrect = new Date(date);
  if (hour) {
    return dateCorrect.getHours() + ":" + dateCorrect.getMinutes()
  }
  const offset = dateCorrect.getTimezoneOffset()
  dateCorrect = new Date(dateCorrect.getTime() - (offset * 60 * 1000));
  return dateCorrect.toISOString().split('T')[0]
}