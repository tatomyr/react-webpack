import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/Greeting.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Greeting />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-root'));
