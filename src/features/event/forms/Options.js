import React, {useState} from 'react';
import classnames from "classnames";
import {eventStep} from '../../../app/status';
import {useDispatch, useSelector} from "react-redux";
import {
  selectEvent,
  eInvite,
  decorator,
  foodArrangement,
  alcoholIncluded,
  rentBoardGame
} from "../eventSlice";
import Confirm from "../confirm";

export default function Options() {
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
      {currentOption.options.map((option, index) => (
        <div onClick={() => setValue(index)}>{option.text}</div>
      ))}
      <Confirm disable={!value} text={step === eventStep.CREATE_NEW_EVENT.RENT_BOARD_GAMES ? "Submit" : "Next"}
               onClick={() => dispatch(currentOption.actionFunction(value))}/>
    </div>
  );
}

const optionsMap = {
  [eventStep.CREATE_NEW_EVENT.SEND_INVITEE]: {
    icon: "",
    actionFunction: eInvite,
    options: [
      {
        text: "Yes"
      },
      {
        text: "No"
      }
    ]
  },
  [eventStep.CREATE_NEW_EVENT.ALCOHOL_INCLUDED]: {
    icon: "",
    actionFunction: alcoholIncluded,
    options: [
      {
        text: "Yes, I Need to order it"
      },
      {
        text: "Yes, I Have it"
      },
      {
        text: "Bring your own bottle"
      },
      {
        text: "No"
      }

    ]
  },
  [eventStep.CREATE_NEW_EVENT.FOOD_ARRANGEMENT]: {
    icon: "",
    actionFunction: foodArrangement,
    options: [
      {
        text: "Order-in"
      },
      {
        text: "Home cooked food"
      },
      {
        text: "Book a caterer"
      },
      {
        text: "No"
      }

    ]
  },
  [eventStep.CREATE_NEW_EVENT.RENT_BOARD_GAMES]: {
    icon: "",
    actionFunction: rentBoardGame,
    options: [
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "I have board game at home"
      }
    ]
  },
  [eventStep.CREATE_NEW_EVENT.DECORATION_REQUIREMENTS]: {
    icon: "",
    actionFunction: decorator,
    options: [
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "I will decorate myself"
      }
    ]
  },
}



