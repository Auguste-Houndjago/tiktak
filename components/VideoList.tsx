import { DetailedVideo } from '@/types/video'
import React from 'react'
import VideoCard from './VideoCard'

export default function VideoList({ videos }: {
    videos: DetailedVideo[]
}) {
  return (
    <ul className=''>
        {videos.map(video =>
          <li key={video._id} className='my-6' >
          <VideoCard video={video} />
          </li>
          
          )}
    </ul>
  )
}
