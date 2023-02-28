import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classnames from "classnames";
import {eventStep} from "../../../app/status";
import {selectEvent, occasion, size} from "../eventSlice";
import Confirm from "../confirm";

export default function Selections() {
  const [value, setValue] = useState(null);
  const event = useSelector(selectEvent);
  const dispatch = useDispatch();
  const {step} = event;

  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });

  const currentOption = optionsMap[step];

  return (
    <div className={classNames}>
      {
        currentOption.map((option, index) => {
          return <div onClick={setValue(index)}>

          </div>
        })
      }
      <Confirm disable={!value} onClick={() => dispatch(currentOption.actionFunction(value))}/>
    </div>
  );
}

const optionsMap = {
  [eventStep.CREATE_NEW_EVENT.SELECT_EVENT_TYPE]: {
    actionFunction: occasion,
    options: [
      {
        text: "Birthday",
        icon: ""
      },
      {
        text: "Anniversary",
        icon: ""
      },
      {
        text: "Dinner",
        icon: ""
      },
      {
        text: "Meetup",
        icon: ""
      },
      {
        text: "Other",
        icon: ""
      }
    ]
  },
  [eventStep.CREATE_NEW_EVENT.SELECT_EVENT_SIZE]: {
    actionFunction: size,
    options: [
      {
        text: "Small",
        icon: ""
      },
      {
        text: "Medium",
        icon: ""
      },
      {
        text: "Large",
        icon: ""
      }
    ]
  }
}