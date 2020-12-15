export const axios = require('axios').create({
    baseURL: 'http://e28-api.alex-giannini.me',
    responseType: 'json',
    withCredentials: true
})

export const axios_nps_api = require('axios').create({
    baseURL: '',
    responseType: 'json'
})