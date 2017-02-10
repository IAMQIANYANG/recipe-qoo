import React, { Component } from 'react';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: "",
        password: ""
      }
    };

    this.onFormSave = this.onFormSave.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  onFormChange(event){
    let userInfo = this.state.userInfo;
    const field = event.target.name;
    userInfo[field] = event.target.value;
    this.setstate = ({userInfo})
  }

  onFormSave(event){
    event.preventDefault();
    console.log(this.state);

  }

  render() {
    return (
      <form>
        <input type="text" name="username" placeholder="username" onChange={this.onFormChange} value={this.state.username}/>
        <input type="text" name="password" placeholder="password" onChange={this.onFormChange} value={this.state.password}/>
        <input type="submit" onClick={this.onFormSave} />

      </form>
    )
  }

}

export default RegisterPage;