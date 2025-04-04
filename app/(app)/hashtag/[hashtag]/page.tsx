import VideoList from '@/components/VideoList'
import { getHashtagVideos } from '@/services/video'
import React from 'react'
import { FaSlackHash } from 'react-icons/fa'

interface PageProps {
  params: Promise<{
    hashtag: string;
  }>;

}

export default async function Page({ params }: PageProps) {
  const { hashtag } = await params;
  console.log(hashtag);
  const videos = await getHashtagVideos(hashtag);
  
  return (
    <div className="space-y-12">
    <div className="flex items-center gap-x-12 border-b border-b-secondary pb-8 text-5xl">
      <div className='p-6 flex justify-center items-center bg-secondary rounded-full'>
        <FaSlackHash />
      </div>
      <div className='capitalize font-bold'>
        {hashtag}
      </div>
    </div>

    <div className="space-y-6">
      <span className="text-xl font-semibold text-neutral-400">
        {`${hashtag} videos`} - {videos.length} Videos
      </span>
      <VideoList videos={videos} />
    </div>
  </div>
  )
}
