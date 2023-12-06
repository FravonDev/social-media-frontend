
import './App.css'
import { AppProvider } from './context/AppProvider'


function App() {

  return (
    <AppProvider>
      <h1 className="text-3xl text-slate-400 font-bold underline">
        Let's start it!
      </h1>
    </AppProvider>

  )
}

export default App
