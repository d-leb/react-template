import { useEffect, useState } from 'react'

import { useMediaQuery } from 'react-responsive'

enum Breakpoints {
  EXTRA_SMALL = 'max-width: 320px',
  SMALL = 'max-width: 720px',
  MEDIUM = 'max-width: 1024px',
  LARGE = 'max-width: 1536px',
}

export const useMobileBreakpoint = (): boolean | undefined => {
  const isMobileBreakpoint = useMediaQuery({ query: `(${Breakpoints.SMALL})` })
  const [isMobile, setIsMobile] = useState<boolean | undefined>()
  useEffect(() => setIsMobile(isMobileBreakpoint), [isMobileBreakpoint])

  if (isMobile === undefined) {
    return undefined
  }

  return isMobile
}
