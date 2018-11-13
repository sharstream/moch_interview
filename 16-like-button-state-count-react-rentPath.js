import classNames from 'classnames';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100,
      clicked: false
    }
  }

  incrementClick = () => {
    this.setState({ 
      count: this.state.count + 1,
      clicked: true
     });
  }

  undoClick = () => {
    this.setState({ 
      count: this.state.count - 1,
      clicked: false
    });
  }

  render() {
    var className = this.state.clicked ? 'like-button' : 'like-button liked';
    var spanClass = classNames('likes-counter');
    return ( 
      <div>
        <div>
          {!this.state.clicked ? 
            <button className={className} onClick={this.incrementClick}>
              <span className={spanClass}> Like | {this.state.count}</span>
            </button>
          :
            <button className={className} onClick={this.undoClick}>
              <span className={spanClass}> Like | {this.state.count}</span>
            </button>
          }
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