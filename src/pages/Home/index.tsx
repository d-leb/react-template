import { useIntl } from 'react-intl'

import { PageTemplate } from 'components/PageTemplate'

import { MeowFact } from './MeowFact'

export default () => {
  const { formatMessage } = useIntl()
  return (
    <PageTemplate heading={formatMessage({ id: 'home' })}>
      <MeowFact />
    </PageTemplate>
  )
}
