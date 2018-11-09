import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
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
    return ( 
      <div>
        <div className="like-counter">
      
        </div>
        <div className="like-button">
          <input type = "button" onClick = {this.handleClick} value = `Like | ${this.state.count}` />
          <h2> Like Button </h2> 
        </div> 
        <style > {
          `.like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
          }
          .liked {
            font-weight: bold;
            color: #1565c0;
          }`
        } </style> 
      </div>
    );
  }
}