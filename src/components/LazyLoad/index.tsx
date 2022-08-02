import React, { ReactNode, Suspense } from 'react'

import { PageLoading } from './PageLoading'

interface Props {
  children: ReactNode
}

export const LazyLoad = ({ children }: Props) => <Suspense fallback={<PageLoading />}>{children}</Suspense>
