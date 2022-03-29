export const LOGIN = 'LOGIN'
export const CLIENT_REGISTER = 'CLIENT_REGISTER'

export const saveLogin = (data) => ({ type: LOGIN, data });
export const saveCLient = (data) => ({ type: CLIENT_REGISTER, data });