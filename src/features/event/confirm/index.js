import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classnames from "classnames";
import Navigator from "./navigator"
import Forms from "./forms"
import Confirm from "./confirm"
import {
  getList,
  selectList
} from './eventSlice';


export default function Index() {
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });

  return (
    <div className={classNames}>
      <button></button>
    </div>
  );
}



