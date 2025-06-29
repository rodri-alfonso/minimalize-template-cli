import authStore from '@/stores/auth'

export default function LoginPage() {
  const { login } = authStore()

  return (
    <div>
      <p> Hi! Im the LoginPage component! </p>
      <button onClick={login}>Login</button>
    </div>
  )
}
