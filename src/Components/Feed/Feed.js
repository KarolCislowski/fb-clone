import './Feed.css'

import { StoryReel } from './StoryReel/StoryReel'
import { MessageSender } from './MessageSender/MessageSender'

export const Feed = () => {
  return (
    <div className='feed'>
      <h2>Feed</h2>
      <StoryReel />
      <MessageSender />
    </div>
  )
}