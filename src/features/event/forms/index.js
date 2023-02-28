import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classnames from "classnames";
import {eventStep} from '../../../app/status';
import Intro from "./Intro";
import Selections from "./Selections";
import Info from "./Info";
import Options from "./Options";


export default function Index({step}) {
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });
  const {CREATE_NEW_EVENT} = eventStep;
  return (
    <div className={classNames}>
      {step === eventStep.INTRO ? <Intro/> :
        (step === CREATE_NEW_EVENT.SELECT_EVENT_TYPE || step === CREATE_NEW_EVENT.SELECT_EVENT_SIZE) ? <Selections/> :
          step === CREATE_NEW_EVENT.EVENT_FORM ? <Info/> : <Options/>
      }}
    </div>
  );
}



