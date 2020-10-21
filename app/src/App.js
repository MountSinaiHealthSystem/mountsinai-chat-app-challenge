import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('Guest User');
  const [messages, setMessages] = useState([
    {
      name: 'Frank',
      text: 'Hi Im Frank',
    },
    {
      name: 'Amy',
      text: 'Hi Im Amy',
    },
    {
      name: 'Frank',
      text: 'Cool',
    },
    {
      name: 'Frank',
      text: 'Hi Im Frank',
    },
    {
      name: 'Amy',
      text: 'Hi Im Amy',
    },
    {
      name: 'Frank',
      text: 'Cool',
    },
    {
      name: 'Frank',
      text: 'Hi Im Frank',
    },
    {
      name: 'Amy',
      text: 'Hi Im Amy',
    },
    {
      name: 'Frank',
      text: 'Cool',
    },
    {
      name: 'Frank',
      text: 'Hi Im Frank',
    },
    {
      name: 'Amy',
      text: 'Hi Im Amy',
    },
    {
      name: 'Frank',
      text: 'Cool',
    },
    {
      name: 'Frank',
      text: 'Hi Im Frank',
    },
    {
      name: 'Amy',
      text: 'Hi Im Amy',
    },
    {
      name: 'Frank',
      text: 'Cool',
    },
    {
      name: 'Frank',
      text: 'Hi Im Frank',
    },
    {
      name: 'Amy',
      text: 'Hi Im Amy',
    },
    {
      name: 'Frank',
      text: 'Cool',
    },
  ]);

  return (
    <div className="app-wrap">
      <div className="app-content">
        <h1 className="chat-title">Chat Room</h1>
        <div className="messages">
          {messages.map((message) => {
            const myMessage = message.name === name;
            return (
              <div className={`message${myMessage ? ' my-message' : ''}`}>
                <strong>{message.name}:</strong> {message.text}
              </div>
            );
          })}
        </div>
        <div className="controls">
          <input placeholder="Your name..." type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <input placeholder="Your message..." type="text" />
        </div>
      </div>
    </div>
  );
}

export default App;
