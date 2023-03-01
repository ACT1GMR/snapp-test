import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classnames from "classnames";
import {eventStep} from "../../../app/status";
import {selectEvent, occasion, size} from "../eventSlice";
import Confirm from "../confirm";
import cake from "../../../assets/icons/cake.png";
import hearts from "../../../assets/icons/hearts.png";
import dishes from "../../../assets/icons/dishes.png";
import glasses from "../../../assets/icons/glasses.png";
import stars from "../../../assets/icons/starts.png";
import peopleSmall from "../../../assets/icons/people-small.png";
import peopleMedium from "../../../assets/icons/people-medium.png";
import peopleLarge from "../../../assets/icons/people-large.png";

export default function Selections() {
  const [value, setValue] = useState(null);
  const event = useSelector(selectEvent);
  const dispatch = useDispatch();
  const {step} = event;

  const classNames = classnames({});

  const currentOption = optionsMap[step];

  const nextStep = e => {
    setValue(null);
    dispatch(currentOption.actionFunction(value))
  }

  return (
    <div className={classNames}>
      <p className="font-bold text-xs w-full">
        {
          step === eventStep.CREATE_NEW_EVENT.SELECT_EVENT_TYPE ? "What is the occasion?" : "What is the size of the guest list? "
        }
      </p>
      <div className="grid gap-4 grid-cols-3 mt-4">
        {
          currentOption.options.map((option, index) => {
            return <div
              className={`flex flex-col cursor-pointer justify-center items-center h-24 bg-neutral-800 rounded-md ${option.text === value && "ring-1 ring-blue-400"}`}
              key={index} onClick={e => setValue(option.text)}>
              <img src={option.icon} alt={option.text} className="w-9"/>
              <p className="font-bold text-sm mt-2">{option.text}</p>
            </div>
          })
        }
      </div>
      <Confirm disable={!value} onClick={nextStep}/>
    </div>
  );
}

const optionsMap = {
  [eventStep.CREATE_NEW_EVENT.SELECT_EVENT_TYPE]: {
    actionFunction: occasion,
    options: [
      {
        text: "Birthday",
        icon: cake
      },
      {
        text: "Anniversary",
        icon: hearts
      },
      {
        text: "Dinner",
        icon: dishes
      },
      {
        text: "Meetup",
        icon: glasses
      },
      {
        text: "Other",
        icon: stars
      }
    ]
  },
  [eventStep.CREATE_NEW_EVENT.SELECT_EVENT_SIZE]: {
    actionFunction: size,
    options: [
      {
        text: "Small",
        icon: peopleSmall
      },
      {
        text: "Medium",
        icon: peopleMedium
      },
      {
        text: "Large",
        icon: peopleLarge
      }
    ]
  }
}