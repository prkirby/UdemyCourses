import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passChanged } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPassChange(text) {
    this.props.passChanged(text);
  }

  render() {
    const { email, pass } = this.props.auth;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
            keyboardType="email-address"
            onChangeText={this.onEmailChange.bind(this)}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPassChange.bind(this)}
            value={pass}
          />
        </CardSection>
        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { emailChanged, passChanged })(LoginForm);
