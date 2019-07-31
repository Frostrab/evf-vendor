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
export const Test = () => {
  return <div>test</div>
}
