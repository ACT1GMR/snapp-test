import React from 'react';
import classnames from "classnames";
import {eventStep} from '../../../app/status';
import {useSelector} from "react-redux";
import {selectEvent} from "../eventSlice";

export default function Options() {
  const event = useSelector(selectEvent);
  const {step} = event;
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });
  const {CREATE_NEW_EVENT} = eventStep;

  const nextStep = e => {
  };
  const optionsMap = {
    [eventStep.CREATE_NEW_EVENT.SEND_INVITEE]: {
      icon: "",
      options: [
        {
          text: "Yes",
          onClick: nextStep
        },
        {
          text: "No",
          onClick: nextStep
        }
      ]
    },
    [eventStep.CREATE_NEW_EVENT.ALCOHOL_INCLUDED]: {
      icon: "",
      options: [
        {
          text: "Yes, I Need to order it",
          onClick: nextStep
        },
        {
          text: "Yes, I Have it",
          onClick: nextStep
        },
        {
          text: "Bring your own bottle",
          onClick: nextStep
        },
        {
          text: "No",
          onClick: nextStep
        }

      ]
    },
    [eventStep.CREATE_NEW_EVENT.FOOD_ARRANGEMENT]: {
      icon: "",
      options: [
        {
          text: "Order-in",
          onClick: nextStep
        },
        {
          text: "Home cooked food",
          onClick: nextStep
        },
        {
          text: "Book a caterer",
          onClick: nextStep
        },
        {
          text: "No",
          onClick: nextStep
        }

      ]
    },
    [eventStep.CREATE_NEW_EVENT.RENT_BOARD_GAMES]: {
      icon: "",
      options: [
        {
          text: "Yes",
          onClick: nextStep
        },
        {
          text: "No",
          onClick: nextStep
        },
        {
          text: "I have board game at home",
          onClick: nextStep
        }
      ]
    },
    [eventStep.CREATE_NEW_EVENT.DECORATION_REQUIREMENTS]: {
      icon: "",
      options: [
        {
          text: "Yes",
          onClick: nextStep
        },
        {
          text: "No",
          onClick: nextStep
        },
        {
          text: "I will decorate myself",
          onClick: nextStep
        }
      ]
    },
  }
  const currentMenu = optionsMap[step]
  return (
    <div className={classNames}>
      {currentMenu.options.map(option=>(
        <div onClick={option.onClick}>{option.text}</div>
      ))}
    </div>
  );
}



