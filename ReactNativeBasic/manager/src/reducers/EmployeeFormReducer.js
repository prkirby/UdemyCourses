import {
  EMPLOYEE_FORM_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FORM_UPDATE: {
      const { prop, value } = action.payload;
      return { ...state, [prop]: value };
    }
    case EMPLOYEE_CREATE:
      return { ...state, ...INITIAL_STATE };
    case EMPLOYEE_UPDATE_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
