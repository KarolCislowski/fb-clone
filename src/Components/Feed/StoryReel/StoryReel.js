import './StoryReel.css'

import { Story } from './Story/Story'

export const StoryReel = () => {
  return (
    <div className='storyReel'>
      <h4>StoryReel</h4>
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  )
}