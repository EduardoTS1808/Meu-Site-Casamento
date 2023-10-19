import React, { Component } from 'react';
import './style.css';
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDate: new Date('2024-07-03T16:30:00').getTime(),
      timeRemaining: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDiff = this.state.targetDate - currentTime;

      const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesRemaining = Math.floor(
        (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsRemaining = Math.floor((timeDiff % (1000 * 60)) / 1000);

      this.setState({
        timeRemaining: {
          days: daysRemaining,
          hours: hoursRemaining,
          minutes: minutesRemaining,
          seconds: secondsRemaining
        }
      });

      if (timeDiff <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
}
render() {
    const { days, hours, minutes, seconds } = this.state.timeRemaining;
   

    return (
      <div>
        <div className='contagemDown'>
        <h5>Contagem Regressiva</h5>
                <div className='numbers'>
                    <div className='rectangle'>
                        <p>{days}</p>
                        <p>dias</p>
                        </div>              
                    <div className='rectangle'>
                        <p>{hours}</p>
                         <p>hr</p>
                         </div>
                    <div className='rectangle'>
                        <p>{minutes}</p>
                         <p>min</p>
                         </div>
                    <div className='rectangle'>
                        <p>{seconds}</p>
                         <p>seg</p>
                         </div>

                </div>
            </div>
      </div>
    );
  }
}

export default Countdown;
