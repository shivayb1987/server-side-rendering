const axios = require('axios')
const baseURL = typeof window !== 'undefined' ? '/api' : 'http://localhost:3001'
const xhrClient = axios.create({baseURL})

module.exports = xhrClient
