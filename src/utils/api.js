import axios from 'axios';

const API_URL = "https://5d6f5765482b530014d2e050.mockapi.io/api"

export default function callAPI(method='GET', endpoint, body){
  return axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err)
  })
}
