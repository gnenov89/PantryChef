import React,{ Component } from "react";
import {Input, Button, Icon} from "react-materialize"
import {Link} from 'react-router-dom';
import withAuth from "../HOC/withAuth";


class form extends Component {
    state = {
        email: "",
        password: ""
    };
    
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.signInWithEmailAndPassword(email, password)
            .then(res => console.log(res))
            .catch(() => { 
                this.props.createAndSetUserWithEmailAndPassword(email, password)
                .then(res => console.log(res))
                .catch(err => console.log(err));
            });

    }
    render () {
        return (
    <form>
    <Input name="email" onChange={this.handleInputChange} value={this.state.email} s={6} label="Email" validate><Icon>account_circle</Icon></Input>
       <Input name="password" onChange={this.handleInputChange} value={this.state.password} type="password" label="password" s={6}><Icon>done</Icon></Input>
       <Button onClick={this.handleFormSubmit}>Sign In</Button>
    </form>
        )
    }
}

export default withAuth(form);