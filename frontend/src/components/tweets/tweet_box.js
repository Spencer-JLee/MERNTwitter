
import React from 'react';
import './tweets.css'

class TweetBox extends React.Component {
  render() {
    return (
        <div className='tweet'>
            <h3>{this.props.text}</h3>
        </div>
    );
  }
}

export default TweetBox;