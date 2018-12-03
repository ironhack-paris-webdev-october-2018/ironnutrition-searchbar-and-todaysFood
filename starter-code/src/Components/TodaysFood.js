import React from 'react';

const TodaysFood = (props) => {
  const {todaysFoodList} = props;
  return ( 
    <div>
      <h1>Todays Food</h1>
      <ul>
        {todaysFoodList.map(oneFood=> {
          return <li>
          {oneFood.quantity}
          {oneFood.name} 
          = {oneFood.calories * oneFood.quantity} cal 
         </li>
        })}
      </ul>
    </div>
   );
}
 
export default TodaysFood;