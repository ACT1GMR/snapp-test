import React from 'react';
import classnames from "classnames";
import {useDispatch} from "react-redux";
import {changeStep} from "../eventSlice";
import {eventStep, getLastValidEvent} from '../../../app/status';
import UpcomingExist from "./UpcomingExist";
import UpcomingNoExist from "./UpcomingNoExist";
import styles from "./upcoming.module.css";


export default function Upcoming() {
  const dispatch = useDispatch();
  const classNames = classnames({
    "mt-6": true
  });

  const upcomingContainerClassNames = classnames({
    [styles.Event]: true,
    "rounded-md p-4": true
  });
  const lastValidEvent = getLastValidEvent();

  const creatNewEvent = () => {
    dispatch(changeStep(eventStep.CREATE_NEW_EVENT.SELECT_EVENT_TYPE));
  }

  return (
    <div className={classNames}>
      {lastValidEvent &&
      <div className="flex flex-row justify-center items-center mb-3">
        <p className="flex-1 text-lg font-bold">Upcoming</p>
        <div className='p-3 rounded-md bg-neutral-900 cursor-pointer'
             onClick={creatNewEvent}>
          <p className="text-sm font-bold">Create New</p>
        </div>
      </div>

      }
      <div className={upcomingContainerClassNames}>
        {
          lastValidEvent ? <UpcomingExist upcoming={lastValidEvent}/> :
            <UpcomingNoExist creatNewEvent={creatNewEvent}/>
        }
      </div>
    </div>
  );
}