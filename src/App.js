/* eslint-disable no-unused-vars */
import './App.css'

import { Header } from './Components/Header/Header'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Feed } from './Components/Feed/Feed'
import { RightBar } from './Components/RightBar/RightBar'
import { Login } from './Components/Login/Login'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Feed />
              <RightBar />
            </div>
          </>
        )}
    </div>
  )
}

export default App
