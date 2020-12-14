import './App.css'

import { Header } from './Components/Header/Header'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Feed } from './Components/Feed/Feed'
import { RightBar } from './Components/RightBar/RightBar'

function App() {
  const user = 'Krasnal'

  return (
    <div className="app">
      {!user ? (
        <h1>LOGIN</h1>
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
