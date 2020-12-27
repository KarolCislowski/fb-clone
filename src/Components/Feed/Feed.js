import './Feed.css'

import { StoryReel } from './StoryReel/StoryReel'
import { MessageSender } from './MessageSender/MessageSender'
import { Post } from './Post/Post'
import { useEffect, useState } from 'react'
import db from '../../firebase'

export const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map(doc => (
        { id: doc.id, data: doc.data() }
      )))
    })
  }, [])

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          likes={post.data.likes}
          comments={post.data.comments}
        />
      ))}

    </div>
  )
}