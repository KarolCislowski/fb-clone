import { Avatar } from '@material-ui/core'
import './Comment.css'

export const Comment = ({ profilePic, username, comment }) => {
  return (
    <div className='comment'>
      <Avatar
        src={profilePic}
        className='comment__avatar'
      />
      <div className='comment__content'>
        <h4>{username}</h4>
        <p>{comment}</p>
      </div>
    </div>
  )
}