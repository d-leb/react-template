import { useIntl } from 'react-intl'

export const HelloWorld = () => {
  const { formatMessage } = useIntl()
  return <div>{formatMessage({ id: 'greeting' })}</div>
}
