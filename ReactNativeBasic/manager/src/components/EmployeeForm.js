import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { employeeFormUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  renderShiftOptions() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map((day) => <Picker.Item key={day} label={day} value={day} />);
  }

  render() {
    const { name, phone, shift } = this.props;

    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane Doe"
            value={name}
            onChangeText={(value) => this.props.employeeFormUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="xxx-xxx-xxxx"
            keyboardType="numeric"
            value={phone}
            onChangeText={(value) => this.props.employeeFormUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={value => this.props.employeeFormUpdate({ prop: 'shift', value })}
          >
            {this.renderShiftOptions()}
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flexDirection: 'column'
  }
};

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeFormUpdate })(EmployeeForm);
