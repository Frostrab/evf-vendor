import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
// export {Evaluation, SummaryEvaluation} from './evaluation';
//config central

export const Evaluation = Loadable({
  loader: () => import('./evaluation/evaluation_management/Evaluation'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const SummaryEvaluation = Loadable({
  loader: () => import('./evaluation/evaluation_management/SummaryEvaluation'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const LoginPage = Loadable({
  loader: () => import('./Login'),
  loading: () => (
    <div>
      <Loading />
    </div>
  ),
})
export const Content1 = Loadable({
  loader: () => import('./Content1'),
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
