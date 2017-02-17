import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';
import * as authActions from '../actions/authActions';


class Header extends Component {


  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Recipe Qoo</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/recipes"> Recipes </Link></li>
            {this.props.isAuthenticated && <li><Link to="/recipes/new"> Add New </Link></li>}
            <li><Link to="/about"> About </Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {this.props.isAuthenticated ? <li><Link to="logout" onClick={this.props.logout}><span className="glyphicon glyphicon-log-in"></span> Log out</Link></li> :
              <li><Link to="/login"><span className="glyphicon glyphicon-user"></span> Log In/Sign Up</Link></li>  }
          </ul>
        </div>
      </nav>
      // <div class="nav-collapse collapse navbar-responsive-collapse">
      //   <div class="navbar-header">
      //     <a class="navbar-brand" href="#">WebSiteName</a>
      //   </div>
      //   <ul className="nav nav-pills pull-right">
      //     <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      //     <li><Link to="/recipes"> Recipes </Link></li>
      //     {this.props.isAuthenticated ? <li><Link to="logout" onClick={this.props.logout}>Log out</Link></li> :
      //       <li><Link to="login">Log In/Sign Up</Link></li>  }
      //     {this.props.isAuthenticated && <li><Link to="/recipes/new"> Add New </Link></li>}
      //     {this.props.isAuthenticated && <li><Link to="users/profile"> My Profile</Link></li>}
      //     <li><Link to="/about"> About </Link></li>
      //   </ul>
      // </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.authenticated
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(authActions.logout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

