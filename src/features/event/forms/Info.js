import React, {useState} from 'react';
import classnames from "classnames";
import {eventStep} from '../../../app/status';
import Confirm from "../../../common/confirm";
import {changeStep, info} from "../eventSlice";
import {useDispatch} from "react-redux";

export default function Info() {
  const [name, setName] = useState();
  const [dateTime, setDateTime] = useState();
  const [budget, setBudget] = useState();
  const dispatch = useDispatch();
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });

  return (
    <div className={classNames}>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <InfoItem name="EventName" text="Event Name" value={name} onChange={setName}/>
        <InfoItem name="DateTime" text="Date time" placeholder="DD-MM-YYYY HH:MM" inputType="datetime-local"
                  value={dateTime} onChange={setDateTime}/>
        <InfoItem name="Budget" text="Budget" value={budget} onChange={setBudget}/>
      </form>
      <Confirm disable={!name || !dateTime || !budget} onClick={()=> dispatch(info({name, dateTime, budget}))}/>
    </div>
  );
}

function InfoItem({name, label, placeholder, inputType, onChange, value}) {
  return <>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={value}
      required
      onChange={e => onChange(e.target.value)}
      id={name} type={inputType || "text"} placeholder={placeholder || ""}/>
  </>
}



