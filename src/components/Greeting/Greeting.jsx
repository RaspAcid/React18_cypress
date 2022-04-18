import React from 'react'

export const Greeting = () => {
  const today = new Date();
  const currentTime = today.getHours();

  const daytime = () => {
    if(currentTime < 6) {
      return 'night'
  } else if(currentTime < 12) {
      return 'morning'
  } else if(currentTime < 18) {
    return 'afternoon'
  } else {
    return 'evening'
  }}

  return (
    <div className="App">
      <p>Good {daytime()}!</p>
    </div>
  );
}