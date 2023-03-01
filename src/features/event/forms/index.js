import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectEvent} from "../eventSlice";
import classnames from "classnames";
import {eventStep} from '../../../app/status';
import Selections from "./Selections";
import Info from "./Info";
import Options from "./Options";
import Navigator from "../navigator";


export default function Index() {
  const {step} = useSelector(selectEvent);
  const classNames = classnames({
  });
  const {CREATE_NEW_EVENT} = eventStep;

  return (
    <div className={classNames}>
      <Navigator/>
      {(step === CREATE_NEW_EVENT.SELECT_EVENT_TYPE || step === CREATE_NEW_EVENT.SELECT_EVENT_SIZE) ? <Selections/> :
          step === CREATE_NEW_EVENT.EVENT_FORM ? <Info/> : <Options/>
      }
    </div>
  );
}



