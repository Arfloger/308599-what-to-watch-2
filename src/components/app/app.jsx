import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';

export class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {requireAuthorization} = this.props;

    return (
    <>
    {requireAuthorization ? <Main/> : <SignIn/>}
    </>);
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  requireAuthorization: state.requireAuthorization,
});

App.propTypes = {
  requireAuthorization: PropTypes.bool,
};

export default connect(mapStateToProps, null)(App);
