
/* ====== Simulated tmi.js base (simplified replacement) ====== */
window.tmi = {
  Client: function (config) {
    return {
      connect: () => console.log("Connected to Twitch (simulated)"),
      on: (event, handler) => {
        // simulate incoming chat messages every 5 seconds
        if (event === 'message') {
          setInterval(() => {
            const fakeTags = { 'display-name': 'Viewer' };
            const fakeMessage = 'This is a test message from chat!';
            handler('#windiestink562', fakeTags, fakeMessage, false);
          }, 5000);
        }
      }
    };
  }
};

/* ====== Actual Chat Box Code ====== */
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
