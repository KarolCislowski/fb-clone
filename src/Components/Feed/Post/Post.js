import './Post.css'

import { Avatar } from '@material-ui/core'

import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { ExpandMoreOutlined } from '@material-ui/icons'


import db from '../../../firebase'
import { useStateValue } from '../../../StateProvider'

export const Post = ({ id, profilePic, image, username, timestamp, message, likes }) => {
  const [{ user }, dispatch] = useStateValue()

  const handleLike = (e) => {
    const index = likes.indexOf(user.uid)
    if (index >= 0) {
      likes = likes.slice(index, index - 1)
      db.collection('posts').doc(id).update({
        likes
      })
    } else {
      db.collection('posts').doc(id).update({
        likes: [...likes, user.uid]
      })
    }
  }

  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar
          src={profilePic}
          className='post__avatar'
        />
        <div className='post__topInfo'>
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className='post__bottom'>
        <p>{message}</p>
      </div>

      {image &&
        <div className='post__image'>
          <img src={image} alt='post cover' />
        </div>
      }

      <div className='post__options'>
        <div className={(likes.indexOf(user.uid) === -1) ? 'post__option' : 'post__option post__option--liked'} onClick={handleLike}>
          <ThumbUpIcon />
          <p>like {(likes && likes.length > 0) && likes.length}</p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post__option'>
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>

    </div>
  )
}