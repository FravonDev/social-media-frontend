
import './App.css'
import { AppProvider } from './context/AppProvider'
import { RouterComponent } from './routes'


function App() {

  return (
    <AppProvider>
      <RouterComponent />
    </AppProvider>

  )
}

export default App
