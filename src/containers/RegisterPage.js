import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/authActions';
import toastr from 'toastr'

toastr.options = {
  "positionClass": "toast-top-full-width"
};


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
    if(!this.state.userInfo.username || !this.state.userInfo.password) {
      toastr.error("Please enter username and password")
    } else {
      this.props.register(this.state.userInfo)
    }
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
              <input className="form-control login-button" type="submit" onClick={this.onFormSave} value="Sign up"/>
            </div>
          </form>
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
    register: userInfo => dispatch(register(userInfo))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);