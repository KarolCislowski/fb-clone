import './App.css'

import { Header } from './Components/Header/Header'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Feed } from './Components/Feed/Feed'
import { RightBar } from './Components/RightBar/RightBar'
import { Login } from './Components/Login/Login'

function App() {
  const user = null

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <Login>
            <Header />

            <div className='app__body'>
              <Sidebar />
              <Feed />
              <RightBar />
            </div>
          </Login>
        )}

    </div>
  )
}

export default App
