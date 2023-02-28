import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classnames from "classnames";

export default function Navigate() {

  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });

  return (
    <div className={classNames}>

    </div>
  );
}