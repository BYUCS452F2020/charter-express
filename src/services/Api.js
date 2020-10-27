import axios from 'axios'

export default() => {
  const base =
  process.env.NODE_ENV === 'production'
    ? 'https://charterserver.azurewebsites.net'
    : 'http://localhost:3000'
  return axios.create({
    baseURL: base
  })
}
