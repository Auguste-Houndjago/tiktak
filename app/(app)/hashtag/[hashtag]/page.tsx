import React from "react";
import { FaSlackHash } from "react-icons/fa";

interface PageProps {
  params: { hashtag: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <div className="flex items-center gap-4 border-b border-gray-300 pb-4 text-4xl">
        <div className="p-4 flex justify-center items-center bg-gray-200 rounded-full">
          <FaSlackHash />
        </div>
        <div className="capitalize font-bold">{params.hashtag}</div>
      </div>
      <p className="text-gray-500">Hashtag affiché sur cette page.</p>
    </div>
  );
}














// import VideoList from '@/components/VideoList'
// import { getHashtagVideos } from '@/services/video'
// import React from 'react'
// import { FaSlackHash } from 'react-icons/fa'

// interface PageProps {
//   params: { hashtag: string }
// }

// export default async function Page({ params }: PageProps) {
//   const hashtag = decodeURIComponent(params.hashtag); 
//   console.log(hashtag);

//   const videos = await getHashtagVideos(hashtag);

//   return (
//     <div className="space-y-24">
//       <div className="flex items-center gap-20 border-b border-b-secondary pb-8 text-5xl">
//         <div className='p-8 flex justify-center items-center bg-secondary rounded-full'>
//           <FaSlackHash />
//         </div>
//         <div className='capitalize font-bold'>
//           {hashtag}
//         </div>
//       </div>

//       <div className="space-y-6">
//         <span className="text-xl font-semibold text-neutral-400">
//           {`${hashtag} videos`} - {videos.length} Videos
//         </span>
//         <VideoList videos={videos} />
//       </div>
//     </div>
//   );
// }
