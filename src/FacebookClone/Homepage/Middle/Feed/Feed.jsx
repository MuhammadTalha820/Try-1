import React from 'react'
import Story from './Story.jsx'
import Messagebox from './Messagebox.jsx'
import Post from './Post.jsx'
import "./Feed.css"
const Feed = () => {
  return (
    <div className='Feed' >
      <Story/>
      <Messagebox/>
      <Post/>
    </div>
  )
}

export default Feed
