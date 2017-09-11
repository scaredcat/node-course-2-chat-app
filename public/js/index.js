var socket = io();
socket.on('connect', function () {
  console.log('connected to server');

  socket.emit('createMessage', {
    from: 'james',
    text: 'message created'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message received', message);
});
