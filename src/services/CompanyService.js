import Api from './Api'

export default {

  async getCompanyById(data){
    return await Api().get(`/company/`+data)
  }
}