import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LazyLoad } from 'components/LazyLoad'
import { RouteLocations } from 'routes'

const Home = React.lazy(() => import('pages/Home'))

export const App = () => (
  <main>
    <Routes>
      <Route
        path={RouteLocations.Home}
        element={
          <LazyLoad>
            <Home />
          </LazyLoad>
        }
      />
      <Route path="*" element={<Navigate to={RouteLocations.Home} />} />
    </Routes>
  </main>
)
