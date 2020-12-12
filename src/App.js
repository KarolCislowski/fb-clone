import './App.css'

import { Header } from './Components/Header/Header'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Feed } from './Components/Feed/Feed'

function App() {
  return (
    <div className="app">
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default App
