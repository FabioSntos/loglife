import axios from 'axios';

export const api = axios.create({
  baseURL: ""
})

export const apiLogin = axios.create({
  baseURL: 'https://sistemadeagendamento-san5v.ondigitalocean.app/'
})