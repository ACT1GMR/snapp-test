import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classnames from "classnames";
import Video from "./video"
import BarLoader from "react-spinners/BarLoader";
import {
  getList,
  selectList
} from './slice';

const CSSProperties = {
  display: "block",
  margin: "0 auto"
};

export default function Index() {
  const {list, status} = useSelector(selectList);
  const dispatch = useDispatch();
  if (!list.length && status !== "loading" && status !== "error") {
    dispatch(getList());
  }
  const classNames = classnames({
    "overflow-y-auto space-y-4 h-full w-full lg:max-w-sm md:max-h-120": true,
    "text-center": status === "error"
  });

  return (
    <div className={classNames}>
      {status === "loading" ?
        <BarLoader cssOverride={CSSProperties} color="#36d7b7"/>
        :
        status === "error" ?
          <p className="text-red-500 text-xs">Error while fetching Aparat service. Network or CORS issue may be the case check your network inspector tab</p>
          :
          list.map(video =>
            <Video key={video.id} video={video}/>
          )
      }
    </div>
  );
}



