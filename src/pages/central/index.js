import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
export const Approval = Loadable({
  loader: () => import('./Approval'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})

export const HolidayCalendar = Loadable({
  loader: () => import('./HolidayCalendar'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
