import React from 'react';
import classnames from "classnames";
import  checkList from "../../../assets/icons/check-list.png";

export default function UpcomingNoExist({creatNewEvent}) {
  const classNames = classnames({
    "flex flex-row items-center": true
  });

  return (
    <div className={classNames}>
      <div className="flex-1">
        <p className="font-bold">No upcoming House party</p>
        <p className="text-xs mt-2">Plan your house party</p>
        <button className="bg-blue-500 text-xs font-bold hover:bg-blue-700 text-white py-2 px-4 mt-3 rounded" onClick={creatNewEvent}>CREATE A NEW EVENT</button>
      </div>
      <img src={checkList}/>
    </div>
  );
}