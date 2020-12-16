export const axios = require('axios').create({
    baseURL: 'http://e28-api.aeg224.loc/',
    responseType: 'json',
    withCredentials: true
})
//    baseURL: process.env.VUE_APP_API_URL ?? 'http://e28-api.aeg224.loc/',

export const axios_nps_api = require('axios').create({
    baseURL: '',
    responseType: 'json'
})