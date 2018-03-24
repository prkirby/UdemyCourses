import { EMAIL_CHANGED, PASS_CHANGED, SUBMIT_AUTH_FORM } from './types';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
});

export const passChanged = (text) => ({
  type: PASS_CHANGED,
  payload: text
});

export const submitAuthForm = () => ({
  type: SUBMIT_AUTH_FORM
});
