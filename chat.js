const client = new window.tmi.Client({
  channels: ['windiestink562']
});

client.connect();

const chatBox = document.getElementById('chat-box');

client.on('message', (channel, tags, message, self) => {
  const msg = document.createElement('div');
  msg.classList.add('chat-message');
  msg.innerHTML = `<strong>${tags['display-name']}:</strong> ${message}`;
  chatBox.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 10000);
});
