import AinotionLanding from './pages/AinotionLanding'
import useAinotionScripts from './hooks/useAinotionScripts'
import './ainotion.css'

export default function App() {
  useAinotionScripts()

  return <AinotionLanding />
}
