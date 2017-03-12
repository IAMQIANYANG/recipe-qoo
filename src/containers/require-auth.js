import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr'

toastr.options = {
  "positionClass": "toast-top-full-width"
};


export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if(!this.props.authenticated) {
        this.context.router.push('/login')
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.push('/login')
      }
    }

    render() {
      toastr.error("Please login or signup to proceed!")
      return <ComposedComponent {...this.props} />
    }

  }

  function mapStateToProps(state) {
    return {authenticated: state.auth.authenticated};

  }

  return connect(mapStateToProps)(Authentication);

}