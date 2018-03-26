import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();
  }

  renderEmployee({ item }) {
    return <EmployeeListItem employee={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderEmployee}
        keyExtractor={(item) => item.uid}
      />
    );
  }
}

const mapStateToProps = ({ employees }) => (
  { employees: _.map(employees, (val, uid) => ({ ...val, uid })) }
);

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
