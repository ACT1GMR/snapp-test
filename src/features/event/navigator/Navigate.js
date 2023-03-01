import React, {useEffect} from 'react';
import classnames from "classnames";
import {selectEvent, changeStep} from "../eventSlice";
import {eventStep, removeCurrentInProgressEvent, setCurrentInProgressEvent} from '../../../app/status';
import backIcon from "../../../assets/icons/back-icon.png"
import {useDispatch, useSelector} from "react-redux";

export default function Navigate() {
  const dispatch = useDispatch();
  const event = useSelector(selectEvent);
  const {step} = event;
  const classNames = classnames({
    "flex flex-row items-center": true
  });
  useEffect(() => {
    const {list, ...rest} = event;
    setCurrentInProgressEvent(rest);
  }, [step])

  const previousStep = () => {
    if (step === eventStep.CREATE_NEW_EVENT.SELECT_EVENT_TYPE) {
      removeCurrentInProgressEvent();
    }
    dispatch(changeStep(eventStep.getStep(step, true)));
  }

  return (
    <div className={classNames}>
      <img className="cursor-pointer" src={backIcon} onClick={previousStep}/>
      <p className="font-bold text-sm ml-3">Create a New Event</p>
    </div>
  );
}