import { useIntl } from 'react-intl'

import { useSampleData } from 'api/sample'

export const MeowFact = () => {
  const { formatMessage } = useIntl()
  const { isLoading, error, data } = useSampleData()
  return (
    <div>
      {formatMessage({ id: 'greeting' })}
      <hr />
      {isLoading && <span>...loading...</span>}
      {!isLoading && !!error && <span>...error...</span>}
      {!isLoading && !error && <span>{data}</span>}
    </div>
  )
}
