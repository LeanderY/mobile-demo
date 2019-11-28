import axios from 'axios'

axios.defaults.withCredentials = false
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    if (response.status === 200) {
      return res
    } else {
      return Promise.reject(res.message)
    }
  },
  error => {
    // 服务器返回不是 2 开头的情况，会进入这个回调
    return Promise.reject(error)
  }
)

export default service
