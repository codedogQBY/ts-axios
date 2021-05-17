import { AxiosRequestConfig } from '../type/index'

export default function xhr(config: AxiosRequestConfig): void {
  const { url, method = 'get', data = null } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
