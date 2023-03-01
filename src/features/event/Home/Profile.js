import React from 'react';
import classnames from "classnames";
import ishita from "../../../assets/icons/ishita.png"


export default function Profile() {
  const classNames = classnames({
    "flex flex-row items-center": true
  });
  return (
    <div className={classNames}>
      <p className="flex-1 text-lg font-bold">Hi, Ishita👋</p>
      <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
           src={ishita} alt="Bordered avatar"/>
    </div>
  );
}