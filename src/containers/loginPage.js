import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import { Link } from 'react-router';
import toastr from 'toastr'




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
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
        <div className="panel-body">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" name="username" placeholder="username" onChange={this.onFormChange} value={this.state.username}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="password" onChange={this.onFormChange} value={this.state.password}/>
            </div>
            <div className="form-group">
              <input className="form-control login-button" type="submit" onClick={this.onFormSave} value="Log In"/>
            </div>
          </form>
          <div className="signup"><Link to="/signup">New? Sign up!</Link></div>
        </div>
        </div>
      </div>
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