import { PrivateRouter, PublicRouter } from './router'
import authStore from '@/stores/auth'

function App() {
  const { isAuthenticated } = authStore()

  if (isAuthenticated) return <PrivateRouter />

  return <PublicRouter />
}

export default App
