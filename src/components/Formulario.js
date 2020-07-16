import React from 'react';
import '../App.css';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {}
        }
    }

    handleInput = event => {
        this.setState({ newUser: { ...this.state.newUser, [event.target.name]: event.target.value }});
    };


    addUser = event => {
        event.preventDefault();
        fetch("https://academlo-api-users.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(this.state.newUser)
        })
            .then(response => response.json())
            .then(results => {
                console.log(results)
                this.props.data()
                }
            )
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div>
                <form onInput={this.handleInput} onSubmit={this.addUser}>
                    <p /><input name="name" type="text" placeholder="Nombre" />&nbsp;
                    <input name="lastname" type="text" placeholder="Apellido" /><p />
                    <input name="email" type="email" placeholder="Email" />&nbsp;
                    <input name="password" type="password" placeholder="Password" /><p />
                    <input type="submit" value="ADD" />
                </form>
            </div>
        )
    }
}

export default Formulario
