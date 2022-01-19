import { Component } from 'react';
import Calculators from './components/Calculators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculators />
    );
  }
}

export default App;
