import React from 'react';
import classnames from "classnames";
import Summary from "./Summary";
import List from "./List";
import Navigate from "../navigator";
import {eventStep} from "../../../app/status";


export default function Index() {
  const classNames = classnames({
  });
  return (
    <div className={classNames}>
      <Navigate noProgress dontTrack navigateText="Checklist" backStep={eventStep.INTRO}/>
      <Summary/>
      <div className="w-full h-px bg-neutral-600 my-4"/>
      <List/>
    </div>
  );
}



