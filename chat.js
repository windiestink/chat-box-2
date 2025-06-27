const chatBox = document.getElementById('chat-box');

// Simulate a message every 5 seconds for testing
setInterval(() => {
  const msg = document.createElement('div');
  msg.classList.add('chat-message');
  msg.innerHTML = `<strong>TestUser:</strong> This is a test message!`;
  chatBox.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 10000);
}, 5000);
