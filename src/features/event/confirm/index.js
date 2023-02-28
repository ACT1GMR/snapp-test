import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classnames from "classnames";
import {eventStep, setEvent} from '../../../app/status';
import {selectEvent, changeStep} from "../eventSlice";


export default function Index({onClick, disable, text}) {
  const event = useSelector(selectEvent);
  const dispatch = useDispatch();
  const {step} = event;
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });

  const nextStep = () => {
    if (step === eventStep.CREATE_NEW_EVENT.RENT_BOARD_GAMES) {
      dispatch(changeStep(eventStep.INTRO));
      const {list, step, ...item} = event;
      return setEvent(item);
    }
    dispatch(changeStep(eventStep.getStep(step)));
    onClick();
  }

  return (
    <div className={classNames}>
      <button onClick={nextStep}>{text}</button>
    </div>
  );
}



