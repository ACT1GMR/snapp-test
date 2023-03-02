import React from 'react';
import classnames from "classnames";

import Navigate from "./Navigate";
import Progress from "./Progress";


export default function Index({noProgress, navigateText, dontTrack, backStep}) {

  const classNames = classnames({
    "mb-4": true,
  });

  return (
    <div className={classNames}>
      <Navigate navigateText={navigateText} dontTrack={dontTrack} backStep={backStep}/>
      {!noProgress && <Progress/>}
    </div>
  );
}