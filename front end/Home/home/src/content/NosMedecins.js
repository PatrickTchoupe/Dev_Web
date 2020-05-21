import React, { Component } from "react"
import Profil from './profil'
import axios from 'axios'




class NosMedecin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      db: ' ',
      callBack: ' ',
      loaded: " "
    }
    this.myCallBack = this.myCallBack.bind(this)
  }

  myCallBack = (dataFromChild) => {
    this.setState({ callBack: dataFromChild })
  }

  componentDidMount() {
    axios
      .post('http://127.0.0.1:5000/get_Med', this.state)
      .then(response => {
        this.setState({
          db: response.data,
          loaded: "true"
        })

      })
      .catch(erreur => {
        console.log(erreur)
      })
  }


  render() {

    const arr = []
    for (let i = 0; i < this.state.db.length; i++) {
      arr.push(<Profil id={this.state.db[i][0]} nom={this.state.db[i][1]} prenom={this.state.db[i][2]} specialite={this.state.db[i][3]} autre={this.state.db[i][4]} image={this.state.db[i][5]} callBackFromParent={this.myCallBack} />)

    }

    return (
      <div>
        {this.state.loaded === "true" ? arr : <p>not loaded</p>}

      </div>
    )
  }
}
export default NosMedecin