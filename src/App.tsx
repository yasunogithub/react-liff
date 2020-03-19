import React from 'react'
import './App.css'
import { buildReplyText } from 'line-message-builder'

const liff = window.liff

const App: React.FC = () => {
  const sendMessage = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
      liff.sendMessages(buildReplyText(['Send Message']))
    })
  }
  return (
    <div className="App">
      <button className="button" onClick={sendMessage}>
        Send Message {process.env.REACT_APP_LIFF_ID}
      </button>
    </div>
  )
}

export default App
