import { useIntl } from 'react-intl'

import { PageContainer } from 'components/PageContainer'

import { MeowFact } from './MeowFact'

export default () => {
  const { formatMessage } = useIntl()
  return (
    <PageContainer heading={formatMessage({ id: 'home' })}>
      <MeowFact />
    </PageContainer>
  )
}
