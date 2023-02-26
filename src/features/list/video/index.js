import React, {useEffect, useRef} from 'react';
import styles from './index.module.css';
import classnames from "classnames";

let lastElem = null
let lastVideoPlayed = null

export default function Video({video}) {
  const {small_poster, description, title, preview_src} = video?.attributes;
  const ref = useRef();
  const videoRef = useRef();
  useEffect(() => {
    intersectionObserver(ref?.current, e => {
      if (lastVideoPlayed) {
        lastVideoPlayed.pause();
        lastVideoPlayed.currentTime = 0;
      }
      lastVideoPlayed = videoRef.current;
      videoRef.current.play();
    })
  }, []);
  const videoClassNames = classnames({
    [styles.Video__Video]: true,
    "w-full": true
  })

  return <div className="rounded overflow-hidden shadow-lg h-4/6 lg:h-max" key={video.id} ref={ref}>
    <video preload="none" muted="muted" src={preview_src} className={videoClassNames} poster={small_poster} ref={videoRef}/>

    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {description ? description.slice(0, 100) + "..." : ""}
      </p>
    </div>
  </div>
}


function intersectionObserver(elem, callBack) {
  if (!elem) {
    return
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      if (entry.target === elem) {
        if (!lastElem) {
          callBack();
          return lastElem = entry;

        }
        if (lastElem.target === elem) {
          return;
        }
        callBack();
        lastElem = entry;
      }
    })
  }, {
    threshold: .8
  });
  observer.observe(elem);
}