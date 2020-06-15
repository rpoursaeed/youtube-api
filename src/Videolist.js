import React from 'react'
import Videoitem from './Videoitem'

const videolist = ({onvideoselect,videos}) =>{
const renderedlist=videos.map((video)=>{
    return <Videoitem key={video.id.videoId} onvideoselect={onvideoselect}     video={video} />
})

return (
    <div>{renderedlist}</div>
)
}


export default videolist;
