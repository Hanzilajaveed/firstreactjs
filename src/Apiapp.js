import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import 'tachyons';


class Apiapp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div> Loading... </div>;
    }
    else {
        return (
          <div classMame= "tc">
            <ul>
              {items.map(item => (
                <li key={item.id} className="ma4">
                  Name: {item.name}<br />
                  Email: {item.email}
                </li>
                ))}
            </ul>
          </div>
      );
    }
  }
}

export default Apiapp;
