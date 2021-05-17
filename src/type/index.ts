export type requestMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'options' | 'patch'
export interface AxiosRequestConfig {
  url: string
  method?: requestMethod
  data?: any
  params?: any
}
