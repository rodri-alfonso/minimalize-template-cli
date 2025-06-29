import authStore from '@/stores/auth'

export default function HomePage() {
  const { logout } = authStore()
  return (
    <div>
      <p> Hi! Im the HomePage component! </p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
