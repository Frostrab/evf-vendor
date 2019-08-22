import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

export const Evaluation = Loadable({
  loader: () => import('./evaluation_management/Evaluation'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
  delay: 300,
})
export const SummaryEvaluation = Loadable({
  loader: () => import('./evaluation_management/SummaryEvaluation'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
  delay: 300,
})
