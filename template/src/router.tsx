import { Route, Switch } from 'wouter'
import LoginPage from '@/pages/Login'
import HomePage from '@/pages/Home'

export function PrivateRouter() {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
    </Switch>
  )
}

export function PublicRouter() {
  return (
    <Switch>
      <Route path='/' component={LoginPage} />
    </Switch>
  )
}
