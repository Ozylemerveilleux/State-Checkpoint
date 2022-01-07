import React , {Component} from 'react';
import './App.css';
import Button from './ButtonShow';
import TimeInterval from './TimeInterval';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <TimeInterval/>
        <Button/>
        
      </div>
    );
  }
  }
 

export default App;
