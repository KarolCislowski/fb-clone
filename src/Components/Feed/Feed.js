import './Feed.css'

import { StoryReel } from './StoryReel/StoryReel'
import { MessageSender } from './MessageSender/MessageSender'

export const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
    </div>
  )
}