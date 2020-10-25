import Api from '../services/Api'

export default {

  getLocations(){
    return Api().get("/locations")
  },
  submitCharter(data){
    return Api().post("/submit/charter", data)
  }
  

}