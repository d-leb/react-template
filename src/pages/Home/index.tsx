import { useIntl } from 'react-intl'

import { PageContainer } from 'components/PageContainer'

import { HelloWorld } from './HelloWorld'

export default () => {
  const { formatMessage } = useIntl()
  return (
    <PageContainer heading={formatMessage({ id: 'home' })}>
      <HelloWorld />
    </PageContainer>
  )
}
