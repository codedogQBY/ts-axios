import { AxiosRequestConfig } from './type/index'
import xhr from './xhr/xhr'
function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
