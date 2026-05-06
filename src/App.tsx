import { Analytics } from '@vercel/analytics/react'
import LandingA from './components/LandingA'
import Impressum from './components/Impressum'

export default function App() {
  const path = window.location.pathname

  if (path === '/impressum') return <><Impressum /><Analytics /></>
  return <><LandingA /><Analytics /></>
}
