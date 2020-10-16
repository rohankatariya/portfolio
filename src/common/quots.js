import React, { Component } from 'react';
import '../App.css';

class Quotes extends Component {
  render() {
    return (
      <button refs="quotes" className="quotes">
        <h2>Thoughts That inspires</h2>
        <b>&ldquo;
          The greatest glory in living lies not in never falling, but in rising every time we fall.&rdquo; -Nelson Mandela<br />
          &ldquo;The way to get started is to quit talking and begin doing.&rdquo; -Walt Disney <br />
          &ldquo;Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.&rdquo; -Steve Jobs
        </b>
      </button>
    );
  }
}

export default Quotes;
