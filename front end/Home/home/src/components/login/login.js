import React , { Component,bcrypt} from 'react'
import './login.css'
import Avatar2 from "../../image/Avatar2.png"
<<<<<<< HEAD
import { Link,Redirect } from "react-router-dom"
import axios from 'axios'
=======
import { Link } from "react-router-dom"
//import bcrypt from 'bcrypt'

>>>>>>> bed95fd85a5d6419e6d5293c1074061b6563d962

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
<<<<<<< HEAD
        axios
             .post('http://127.0.0.1:5000/login', this.state)
             .then(reponse =>{
                 console.log(reponse)
                if(reponse.data=="patient"){
                    this.props.history.push('/EspacePatient');
                  }else if(reponse.data=="medecin"){
                    this.props.history.push('/Medecin');

                  }else {
                      console.log(reponse)
                  }
                 
             })
             .catch(erreur =>{
                 console.log(erreur)
             })
        
=======
		var pass = this.state.password; 
		var requete = 'http://127.0.0.1:5000/ask/' + this.state.email;
		/*
		console.log('pas ok1')
		const bcrypt = require('bcrypt');
		console.log('ok1');
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(this.state.password, salt);*/
		var bcrypt = require('bcryptjs');
			bcrypt.genSalt(10, function(err, salt) {
				bcrypt.hash(pass, salt, function(err, hash) {
					
					fetch(requete, {
						mode : 'cors',
						method: "POST",
						body : JSON.stringify(hash),
						header : {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin' : '*',
							"Access-Control-Allow-Credentials" : true 
						}
					}).then(response => response.json()).then(data=> console.log(data));
					
					console.log(hash);
				});
			});
		console.log(this.state.password);
		
		
		/*
		var saltRounds = 10;
		bcrypt.hash(this.state.password, saltRounds, function(err, hash) {
			console.log('ok2');
			console.log(hash);
		var requete = 'http://127.0.0.1:5000/ask/' + this.state.email;
		fetch(requete, {
			mode : 'cors',
			method: "POST",
			body : JSON.stringify(hash),
			header : {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin' : '*',
                "Access-Control-Allow-Credentials" : true 
			}
		}).then(response => response.json()).then(data=> console.log(data));
		});*/
		
		
>>>>>>> bed95fd85a5d6419e6d5293c1074061b6563d962
    };

    render(){
        return(

            <form className= "formLog" onSubmit={this.handleOnsubit}>
                    <img src ={Avatar2} alt ="loginimage" className="avatar"/>


                <div>
                <legend className="connecter">Se connecter</legend>
                </div>
                <div >

                <input type ="text2" name = "email" placeholder= "Adresse Email"   required
                       onChange={this.handleUserNameChange} className="email"/>
                </div>
                <div>

                    <input type ="password" placeholder= "Password" required  className="mtp"
                    onChange={this.handlePasswordChange}/>
                </div>
                <span><hr className ="ligne2"></hr></span>
                <Link to ='/'><a href="#"><span  className="hint"> mot de passe oublié ?</span></a></Link>
                <Link to ='/signin'><span className='test'>creer un compte </span></Link>

                <div>
                    <input type = "submit" className="login2"  id="soumettre" value ="Connecter"/>
                </div>
    
                <span className="signin">

                </span>

            </form>

        )
    }
}
export default Login