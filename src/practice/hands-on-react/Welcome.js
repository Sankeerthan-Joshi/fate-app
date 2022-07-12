import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Welcome extends Component {
  
    // IMPLEMENT YOUR CODE HERE
    render(){
        return (<div>
        <h1>Welcome User</h1>
        <p>React is a declarative, efficient, and flexible JavaScript library for building interactive user interfaces. It lets you compose complex UIs from small and isolated pieces of code called ‘components’.</p>
        <DateComp />
        </div>);
    }
  
}

class DateComp extends Component {
  
  // IMPLEMENT YOUR CODE HERE
  constructor(props){
      super(props);
      var today = new Date();
      const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      this.state = {
          date
      }
  }
  render(){
      const align = {marginRight: 0,
    textAlign: 'right'
    };
      return (<div>
      <p style= {align}>Dated: {this.state.date}</p>
      </div>);
  }
}

ReactDOM.render(<Welcome></Welcome>,document.getElementById('app') );

export {DateComp}
export default Welcome;