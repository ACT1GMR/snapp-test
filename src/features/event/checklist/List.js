import React, {useRef, useState} from 'react';
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {changeSelectedEvent, selectEvent} from "../eventSlice";
import {updateEvent} from "../../../app/status";


export default function List() {
  const {selectedEvent} = useSelector(selectEvent);
  const dispatch = useDispatch();
  const selectedItemCheckList = selectedEvent.checkList;

  const updateCheck = (id, title, checked, isInsert) => {
    let newCheckList = [...selectedEvent.checkList];
    if (isInsert) {
      newCheckList.push({id, title, checked});
    } else {
      newCheckList = newCheckList.map(item => {
        if (item.id === id) {
          return {id, title, checked};
        }
        return item;
      })
    }

    updateEvent(selectedEvent.dateTime, {checkList: newCheckList});
    dispatch(changeSelectedEvent({...selectedEvent, checkList: newCheckList}));
  }
  return (
    <div>
      {selectedItemCheckList.map((item, index) => (
        <CreateCheckListItem key={item.id} item={item} updateCheck={updateCheck}/>
      ))}
      <CreateCheckListItem insertMode item={{}} updateCheck={updateCheck}/>
    </div>
  );
}

function CreateCheckListItem({insertMode, item: {id, title, checked}, updateCheck}) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("Tap to add a new item to the list");
  const [editChecked, setEditChecked] = useState(insertMode ? false : checked);
  const labelRef = useRef();
  const setEditMode = e => {
    if (!editing) {
      setEditing(true);
      setEditTitle("Type a task");
      setTimeout(e => {
        document.execCommand('selectAll', false, null)
      }, 0);
    }
  }
  const onChecked = e => {
    setEditChecked(e.currentTarget.checked);
    if (!insertMode) {
      updateCheck(id, title, e.currentTarget.checked)
    }
  }
  const reset = () => {
    setEditing(false);
    setEditTitle("Tap to add a new item to the list");
  }

  const onNewItem = () => {
    reset();
    const itemTitle = labelRef.current.innerText.trim();
    updateCheck(insertMode ? Date.now() : id, itemTitle, editChecked, insertMode);
  }

  const labelClassName = classnames({
    "ml-2 text-xs cursor-pointer": true,
    "text-neutral-500": insertMode,
    "font-bold": !insertMode
  })
  const buttonClassName = type => classnames({
    "bg-blue-500 text-xs text-white py-px px-2 rounded": true,
    [type === "cancel" ? "bg-blue-500 hover:bg-blue-700" : "bg-red-500 hover:bg-red-700"]: true,
    ["ml-1"]: type === "cancel"
  })
  return <div className="p-3 rounded-md bg-neutral-900 mt-2 w-full cursor-pointer flex items-center relative"
              onClick={insertMode && setEditMode}>
    <div className="flex-1 flex items-center">
      <input id={id} type="checkbox" checked={editChecked}
             onChange={onChecked}
             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"/>
      <label htmlFor={insertMode ? null : id}
             ref={labelRef}
             contentEditable={insertMode}
             suppressContentEditableWarning={true}
             className={labelClassName}>{insertMode ? editTitle : title}</label>
    </div>
    {editing &&
    <div className="absolute right-1 top-3">
      <button onClick={onNewItem}
              className={buttonClassName()}>OK
      </button>
      <button onClick={reset}
              className={buttonClassName("cancel")}>NO
      </button>
    </div>
    }
  </div>
}