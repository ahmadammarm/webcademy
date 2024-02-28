import React from 'react'

function Video1({ videoUrl }) {
  return (
    <video width={1000} height={250} controls className="rounded-md">
        <source src={videoUrl} type="video/mp4"/>
    </video>
  )
}

export default Video1
