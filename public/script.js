const socket = new WebSocket('ws://localhost:8080');
const form = document.getElementById('form');

socket.addEventListener('open', (event) => {
  console.log('WebSocket connected');
  socket.send(JSON.stringify({ type: 'app'}));
});

socket.addEventListener('message', (event) => {
  console.log(`Received message: ${event.data}`);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.getElementById('message').value;
  socket.send(JSON.stringify({ type: 'app', payload: message }));
});

socket.addEventListener('close', (event) => {
  console.log('WebSocket disconnected');
});