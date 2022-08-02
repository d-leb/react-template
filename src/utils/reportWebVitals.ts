import { Metric } from 'web-vitals'

import { configuration } from 'utils/configuration'

const reportHandler = (metric: Metric): void => {
  console.log(metric)
}

export const reportWebVitals = (): void => {
  if (configuration.LogWebVitals) {
    import(
      /* webpackMode: "lazy" */
      'web-vitals'
    ).then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportHandler)
      getFID(reportHandler)
      getFCP(reportHandler)
      getLCP(reportHandler)
      getTTFB(reportHandler)
    })
  }
}
