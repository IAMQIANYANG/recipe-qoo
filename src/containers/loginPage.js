import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';



class LoginPage extends Component {
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
    this.props.login(this.state.userInfo)
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

const mapStateToProps = (state, ownProps) => {
  return {

  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    login: userInfo => dispatch(authActions.login(userInfo))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);