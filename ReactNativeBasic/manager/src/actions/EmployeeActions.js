import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_FORM_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCESS,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
} from './types';

export const employeeFormUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_FORM_UPDATE,
  payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => (dispatch) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({ name, phone, shift })
  .then(() => {
    Actions.pop();
    dispatch({ type: EMPLOYEE_CREATE });
  });
};

export const employeeUpdate = ({ name, phone, shift, uid }) => (dispatch) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
  .set({ name, phone, shift })
  .then(() => {
    Actions.pop();
    dispatch({ type: EMPLOYEE_UPDATE_SUCCESS });
  });
};

export const employeesFetch = () => (dispatch) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .on('value', snapshot => {
    dispatch({ type: EMPLOYEES_FETCH_SUCESS, payload: snapshot.val() });
  });
};

export const employeeDelete = ({ uid }) => (dispatch) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
  .remove()
  .then(() => {
    Actions.pop();
    dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
  });
};
