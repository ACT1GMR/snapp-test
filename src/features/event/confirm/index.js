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
    "absolute inset-x-0 w-full p-4 bottom-0": true
  });
  const buttonClassNames = classnames({
    "w-full bg-blue-500 text-xs font-bold hover:bg-blue-700 text-white py-2 px-4 mt-3 rounded": true,
    "opacity-50 cursor-not-allowed": disable
  });

  const nextStep = () => {
    if (step === eventStep.CREATE_NEW_EVENT.RENT_BOARD_GAMES) {
      const rentBoardGame = onClick();
      const {list, step, ...item} = event;
      setEvent({...item, rentBoardGame});
      return dispatch(changeStep(eventStep.INTRO));
    }
    dispatch(changeStep(eventStep.getStep(step)));
    onClick();
  }

  return (
    <div className={classNames}>
      <button onClick={nextStep} className={buttonClassNames}>{text || "NEXT"}</button>
    </div>
  );
}