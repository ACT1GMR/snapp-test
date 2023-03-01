import React from 'react';
import classnames from "classnames";

import Navigate from "./Navigate";
import Progress from "./Progress";


export default function Index() {

  const classNames = classnames({
    "mb-4": true,
  });

  return (
    <div className={classNames}>
      <Navigate/>
      <Progress/>
    </div>
  );
}