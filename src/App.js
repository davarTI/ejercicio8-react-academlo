import React from 'react';
import Formulario from './components/Formulario'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { users: [] }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch("https://academlo-api-users.herokuapp.com/users")
      .then(response => response.json())
      .then((results) => {
        this.setState({ users: results.data })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Formulario data={this.getData} />
        {this.state.users.map((user, i) => {
          return (
            <div className="main-container">
              <div key={i}>
                <h6 className="otherColour">{i + 1}</h6>
                <h6>{user.name}</h6>
                <h6>{user.lastname}</h6>
                <h6>{user.email}</h6>
                <h6>{user.password}</h6>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
