import { ReactNode, useEffect, useMemo, useState } from 'react'
import { IntlProvider } from 'react-intl'

import enMesages from './en.json'

type MessageKey = keyof typeof enMesages
type Messages = Record<MessageKey, string>
interface MessagesCollection {
  [locale: string]: Messages
}

const getLocale = () => navigator.language.split(/[-_]/)[0]

const loadMessages = (locale: string): Promise<Messages> =>
  import(
    /* webpackMode: "lazy" */
    `./${locale}.json`
  )

interface Props {
  children: ReactNode
}

export const MessageProvider = ({ children }: Props) => {
  const locale = useMemo(getLocale, [])
  const [messages, setMessages] = useState<MessagesCollection>({ en: enMesages })

  useEffect(() => {
    loadMessages(locale).then((lazyMessages: Messages) => {
      setMessages((prevMessages) => ({ ...prevMessages, [locale]: lazyMessages }))
    })
  }, [locale])

  return (
    <IntlProvider {...{ locale }} messages={messages[locale] ?? messages.en} defaultLocale="en">
      {children}
    </IntlProvider>
  )
}
