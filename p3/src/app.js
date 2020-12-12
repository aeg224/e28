export const axios = require('axios').create({
    baseURL: 'http://p3.aeg224.loc',
    responseType: 'json',
    withCredentials: true
})

export const axios_nps_api = require('axios').create({
    baseURL: 'http://p3.aeg224.loc',
    responseType: 'json'
})