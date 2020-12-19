import './Login.css'

import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'

export const Login = () => {
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result)
      })
      .catch(err => alert(err.message))
  }

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
          alt='facebook_logo'
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg'
          alt='fb_text_logo'
        />
      </div>
      <Button
        type='submit'
        onClick={signIn}
      >
        Sign In
      </Button>
    </div>
  )
}