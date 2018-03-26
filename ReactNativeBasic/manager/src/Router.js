import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Stack key="auth" initial>
        <Scene key="login" component={LoginForm} title="Please Login" initial />
      </Stack>
      <Stack key="main">
        <Scene
          key="employeeList"
          title="Employee List"
          component={EmployeeList}
          rightTitle="Add"
          onRight={() => { Actions.employeeCreate(); }}
          rightButtonStyle={{ right: 0 }}
          initial
        />
        <Scene
          key="employeeCreate"
          title="Create Employee"
          component={EmployeeCreate}
        />
        <Scene
          key="employeeEdit"
          title="Edit Employee"
          component={EmployeeEdit}
        />
      </Stack>
    </Stack>
  </Router>
);

export default RouterComponent;
