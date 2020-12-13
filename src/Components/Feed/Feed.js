import './Feed.css'

import { StoryReel } from './StoryReel/StoryReel'
import { MessageSender } from './MessageSender/MessageSender'
import { Post } from './Post/Post'

export const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic=''
        message='Testing...'
        timestamp='time goes here'
        username='DwarfDev666'
        image='https://images.unsplash.com/photo-1607765519765-6536b2ca8b24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80'
      />
    </div>
  )
}