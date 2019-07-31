import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
export const LoginPage = Loadable({
  loader: () => import('./Login'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const Layout = Loadable({
  loader: () => import('../components/layout'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
