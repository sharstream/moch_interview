import classNames from 'classnames';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {

    var btnClass = classNames('like-button liked');

    var spanClass = classNames('likes-counter');

    return ( 
      <div>
        <div>
          <button className={btnClass} onClick={this.handleClick}>
            <span className={spanClass}> Like | {this.state.count}</span>
          </button>
          {/* <h2> Like Button </h2>  */}
        </div>
        <style>{`.like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
          }
          .liked {
            font-weight: bold;
            color: #1565c0;
          }
          `}</style> 
      </div>
    );
  }
}