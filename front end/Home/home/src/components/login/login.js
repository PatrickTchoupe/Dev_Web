import React , { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './login.css'
import ava from "../../image/ava.svg"
import docs from "../../image/docs.svg"
import { Link,Redirect } from "react-router-dom"
import axios from 'axios'
import EspacePatient from './../../EspacePatient'
import io from "socket.io-client";


class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email : ' ',
            password : ' '
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this. handlePasswordChange.bind(this);
        this.handleOnsubit = this.handleOnsubit.bind(this)

    }
    handleUserNameChange = event => {
        this.setState({
            email : event.target.value

        })
    };
    handlePasswordChange = event =>{
        this.setState({
            password : event.target.value
        })
    };
    handleOnsubit = event =>{
        event.preventDefault();
        
       
        axios.defaults.withCredentials = true

        axios
             .post('http://127.0.0.1:5000/login', this.state,)
             .then(reponse =>{
                 console.log(reponse)
                if(reponse.data[0][0]==="patient"){

                    this.props.history.push('/Patient');
                  }else if(reponse.data[0][0]==="medecin"){

                    this.props.history.push('/Medecin');

                  }else {

                      console.log(reponse.data[0][0])
                  }
                 
             })
             .catch(erreur =>{
                 console.log(erreur)
             })
        
    };

    render(){
        return(
            <div className="container1">
                    <div className="img2">
                        <img src={docs} alt="infirmiéres"></img>
                    </div>
                    <div className="login-container">
                            <form id="lgform" onSubmit={this.handleOnsubit}>
                                    <img className="avatar" src={ava} alt="avatar"></img>
                                    <h2>Mon espace sante</h2>
                                    <div className="form-group row">
                                        <label for="email" className="col-sm-3 col-form-label">Email*</label>
                                        <div className="col-sm-7">
                                            <input type ="text" id = 'email' name = "email"  required   onChange={this.handleUserNameChange} className="form-control"/>
                                        </div> 
                                    </div>
                                    <div className="form-group row">
                                        <label for="mdp" className="col-sm-3 col-form-label">Password*</label>
                                        <div className="col-sm-7">
                                            <input type ="password" id ='mdp' required   onChange={this.handlePasswordChange} className="form-control"/>
                                        </div>
                                    </div>

                                    <Link to ='/'><a href="#" className="lglk">Mot de passe oublié ?</a></Link><br></br>
                                    <Link to ='/signin'><a href="#" className="lglk">Créer un compte ?</a></Link><br></br>

                                    <input type="submit" id="login"  className ="btn btn-success" value="Se connecter"></input>
                            </form>
                    </div>
            </div>

        )
    }
}
export default withRouter(Login)