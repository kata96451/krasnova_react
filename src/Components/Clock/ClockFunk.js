import React, {useEffect, useState} from "react";
import './clock.css'

export default function  ClockFunk(props)  {
         const {date} = props;
         const [stateDate, setStateDate] = useState(date);
         const TimerId = setInterval(() => setStateDate(new Date()), 1000);

         useEffect( () => {
             return () => {
                 clearInterval(TimerId)
             }
         })

         return (
             <div className="clock-box">
                 <h2 className="clock">In Rome it is {stateDate.toLocaleTimeString('ru', { timeZone: 'Europe/Rome' })}.</h2>
             </div>
         );
}