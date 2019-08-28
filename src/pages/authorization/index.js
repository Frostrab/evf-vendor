import React from 'react'
import Loadable from 'react-loadable'
import { Loading } from '../../components/Loading'
export const AuthorityCompany = Loadable({
  loader: () => import('./AuthorityCompany'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})

export const RoleManagement = Loadable({
  loader: () => import('./RoleManagement'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const UserRole = Loadable({
  loader: () => import('./UserRole'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
