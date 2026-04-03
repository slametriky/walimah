import MessageGeneratorPage from './components/MessageGeneratorPage'
import WeddingInvitation from './components/WeddingInvitation'

function App() {
  if (typeof window !== 'undefined' && window.location.pathname === '/generator') {
    return <MessageGeneratorPage />
  }

  return <WeddingInvitation />
}

export default App
