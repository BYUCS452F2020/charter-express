import Api from '../services/Api'

export default {
  registerPerson (credentials) {
    return Api().post('register/person', credentials)
  },
  registerCompany (credentials) {
    return Api().post('register/company', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}