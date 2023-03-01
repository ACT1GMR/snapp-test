import React, {useState} from 'react';
import Confirm from "../confirm";
import {info} from "../eventSlice";
import {useDispatch} from "react-redux";

export default function Info() {
  const [name, setName] = useState();
  const [dateTime, setDateTime] = useState();
  const [budget, setBudget] = useState();
  const dispatch = useDispatch();

  const nextStep = () => {
    dispatch(info({name, dateTime: new Date(dateTime).getTime(), budget}))
  }

  return (
    <div>
      <form className="shadow-md rounded">
        <InfoItem name="EventName" label="Event Name" value={name} onChange={setName}/>
        <InfoItem name="DateTime" label="Date time" placeholder="DD-MM-YYYY HH:MM" type="datetime-local"
                  value={dateTime} onChange={setDateTime}/>
        <InfoItem name="Budget" label="Budget" value={budget} onChange={setBudget} type="number"/>
      </form>
      <Confirm disable={!name || !dateTime || !budget} onClick={() => nextStep()}/>
    </div>
  );
}

function InfoItem({name, label, placeholder, type, onChange, value}) {
  return <>
    <label className="block font-bold text-xs mb-2 mt-4" htmlFor={name}>
      {label}
    </label>
    <input
      className="shadow appearance-none border-neutral-700 bg-neutral-900 text-white border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      value={value}
      required
      onChange={e => onChange(e.target.value)}
      id={name} type={type || "text"} placeholder={placeholder || ""}/>
  </>
}