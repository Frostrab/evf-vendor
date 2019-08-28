import React from 'react'
import Loadable from 'react-loadable'
import { Loading } from '../../../components/Loading'
export const Criteria = Loadable({
  loader: () => import('./Criteria'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})

export const EvaluationTemplate = Loadable({
  loader: () => import('./EvaluationTemplate'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const Grade = Loadable({
  loader: () => import('./Grade'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const LevelPoint = Loadable({
  loader: () => import('./LevelPoint'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const Performance = Loadable({
  loader: () => import('./Performance'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const PerformanceGroup = Loadable({
  loader: () => import('./PerformanceGroup'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const Period = Loadable({
  loader: () => import('./Period'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
