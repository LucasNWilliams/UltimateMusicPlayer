export interface IApiPayloadType {
  method: string,
  headers: {
    ['Content-Type']: string
  },
  body: URLSearchParams
}
