import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/',
  method: 'GET',

  headers: {
    "Accept": "application/json",
    "user-key": "a17a8079cad3599ac7c970039e2c09ec"
  },
})