import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('Guest User');
  const [messages, setMessages] = useState([]);

  async function getMessages() {
    const response = await fetch('/api/getMessages');
    const parsedResponse = await response.json();
    setMessages(parsedResponse.data || []);
  }

  async function createMessage(message) {
    await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    await getMessages();
  }

  useEffect(() => {
    getMessages();
    const pollMessagesInterval = setInterval(getMessages, 1000);
    return () => {
      clearInterval(pollMessagesInterval);
    }
  }, []);

  function handleTextKeyDown (e) {
    if (e.key === 'Enter') {
      createMessage({
        name,
        text: e.target.value,
      });
    }
  }

  return (
    <div className="app-wrap">
      <div className="app-content">
        <marquee><h1>Super Slick Chat Room</h1></marquee>
        <div className="messages">
          {messages.map((message, i) => {
            const myMessage = message.name === name;
            return (
              <div className={`message${myMessage ? ' my-message' : ''}`} key={i}>
                <strong>{message.name}:</strong> {message.text}
              </div>
            );
          })}
        </div>
        <div className="controls">
          <input placeholder="Your name..." type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <input placeholder="Say something..." type="text" onKeyDown={handleTextKeyDown}/>
        </div>
      </div>
    </div>
  );
}

export default App;
