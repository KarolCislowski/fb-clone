import { Avatar } from '@material-ui/core'
import { useState } from 'react'
import db from '../../../../firebase'
import firebase from 'firebase'
import { useStateValue } from '../../../../StateProvider'
import './Comments.css'

export const Comments = ({ postId, comments }) => {
  const [comment, setComment] = useState('')

  const [{ user }, dispatch] = useStateValue()

  const handleSubmit = (e) => {
    e.preventDefault()
    db.collection('posts').doc(postId).update({
      comments: [...comments,
      {
        comment,
        profilePic: user.photoURL,
        username: user.displayName
      }]
    })
  }
  return (
    <div className='comments'>
      {comments && comments.map(e =>
      (
        <p>{e.comment}</p>
      ))}
      <div className='commentsSender'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='commentsSender__input'
            placeholder={`Write a comment...`}
          />
          <button
            onClick={handleSubmit}
            type='submit'
          >
            Hidden submit
          </button>
        </form>
      </div>
    </div>
  )
}