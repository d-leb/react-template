interface Configuration {
  readonly LogWebVitals: boolean
}

export const configuration: Configuration = {
  LogWebVitals: process.env.LOG_WEB_VITALS === 'true',
}
