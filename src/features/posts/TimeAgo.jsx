import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'
export default function TimeAgo({time}) {
    let timeAgo = ""
    if(time) {
        let date = parseISO(time)
        let timeStamp = formatDistanceToNow(date)
        timeAgo = `${timeStamp} ago`
    }
  return (
    <div>
       <p> {timeAgo}</p>
    </div>
  )
}
