import React from 'react'
import MessageText from './MessageText'
import MessageBanner from './MessageBanner'
import MessageContainer from './MessageContainer'

const MessageArea = () => {
  return (
    <div class="card vh-100 rounded-0">
      <MessageBanner />

      {/* Message Container (fills the middle space) */}
      <MessageContainer />

      {/* Bottom Banner */}
      <MessageText />

    </div>
  )
}

export default MessageArea