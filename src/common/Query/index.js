import axios from 'axios'

const serverUrl = 'http://192.168.1.107:3000/api'

export default function query(url, body = {}) {
    return axios.post(serverUrl + url, body)
}