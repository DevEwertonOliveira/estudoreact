import { Component } from "react"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Yihua', lastName: 'Zhang' },
      company: "ZTM"
    }
  }
  render() {
    return (
      <div>
        oi
      </div>
    );
  }

}

export default App;
