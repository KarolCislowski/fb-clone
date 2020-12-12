import './Story.css'

import { Avatar } from '@material-ui/core'

export const Story = ({ image, profileSrc, title }) => {
  return (
    <div className='story'>
      <Avatar src='{profileSrc}' />
      <h4>{title}</h4>
    </div>
  )
}