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
import loveParcel from "../../../assets/icons/love-parcell.png";
import ballons from "../../../assets/icons/ballons.png";
import glasses from "../../../assets/icons/glasses-1.png";
import cake from "../../../assets/icons/cake-1.png";
import dart from "../../../assets/icons/dart.png";

export default function Options() {
  const [value, setValue] = useState(null);
  const event = useSelector(selectEvent);
  const dispatch = useDispatch();

  const {step} = event;
  const classNames = classnames({
    "flex flex-col justify-center items-center": true
  });

  const currentOption = optionsMap[step];
  const nextStep = () => {
    setValue(null);
    dispatch(currentOption.actionFunction(value));
    return value;
  }

  return (
    <div className={classNames}>
      <img src={currentOption.icon} className="mb-6 h-28" alt={currentOption.question}/>
      <p className="font-bold text-sm w-full mb-2">{currentOption.question}</p>
      {currentOption.options.map((option, index) => (
        <div key={option.text}
             className={`p-3 rounded-md bg-neutral-900 mt-2 w-full cursor-pointer ${option.text === value && "ring-1 ring-blue-400"}`}
             onClick={() => setValue(option.text)}>
          <p className="text-sm font-bold">{option.text}</p>
        </div>
      ))}
      <Confirm disable={!value} text={step === eventStep.CREATE_NEW_EVENT.RENT_BOARD_GAMES ? "SUBMIT" : "NEXT"}
               onClick={nextStep}/>
    </div>
  );
}

const optionsMap = {
  [eventStep.CREATE_NEW_EVENT.SEND_INVITEE]: {
    icon: loveParcel,
    question: "Do you want to send e-invite?",
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
    icon: glasses,
    question: "What will be the food arrangements?",
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
    icon: cake,
    question: "Will there be alcohol?",
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
  [eventStep.CREATE_NEW_EVENT.DECORATION_REQUIREMENTS]: {
    icon: ballons,
    question: "Do you wish to hire a decorator?",
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
  [eventStep.CREATE_NEW_EVENT.RENT_BOARD_GAMES]: {
    icon: dart,
    question: "Do you plan to rent board games?",
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
  }
}