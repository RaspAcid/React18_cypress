import React from 'react';
import { useState } from "react";

export const DateView = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  const [checkedState, setCheckedState] = useState(false)
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentMonthName = monthNames[currentMonth]

  const onCheckedChange = () => {
    setCheckedState(!checkedState)
  }

  return (
    <>
      <div>
        <input type="checkbox" id="switcher" data-testid='switcher'
        checked={checkedState} onChange={onCheckedChange}/>
        <label htmlFor="switcher"> Show Date</label>
      </div>

      {checkedState &&
          <div id='currentDate' data-testid='currentDate'>
            <p>Today is {currentMonthName} {currentDay}</p>
          </div>
      }
    </>
  )
}