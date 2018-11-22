import axios from 'axios'
import APIMap from './endpoints'

const getPets = function () {
  console.log(APIMap.getPets)
  return axios.get(`${APIMap.getPets}`)
}


export{
  getPets
}
