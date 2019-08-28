import React from 'react'
import Loadable from 'react-loadable'
import { Loading } from '../../../components/Loading'
export const Evaluation = Loadable({
  loader: () => import('./Evaluation'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})

export const SummaryEvaluation = Loadable({
  loader: () => import('./SummaryEvaluation'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
