
import './App.css'
import { AppProvider } from './contexts/AppProvider'
import { RouterComponent } from './routes'


function App() {

  return (
    <AppProvider>
      <RouterComponent />
    </AppProvider>

  )
}

export default App
