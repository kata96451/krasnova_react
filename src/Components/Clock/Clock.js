import React from "react";
import './clock.css'

 class Clock extends React.Component {
     constructor(props) {
         super(props);
         this.state = {date: props.date};
         this.ID = null
     }

     componentDidMount() {
         this.ID = setInterval(() => this.setState({date: new Date()}), 1000)
     }

     componentWillUnmount() {
         clearInterval(this.ID)
     }

     render() {
         return (
             <div>
                 <h2 className="clock">In Ukraine it is {this.state.date.toLocaleTimeString('ru', { timeZone: 'Europe/Kiev' })}.</h2>
             </div>
         );
     }
}

export default Clock;