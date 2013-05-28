/*
 * Serve content over a socket
 */

module.exports = function (socket) {
  var urlQueue = [];
  
  socket.on('add:url', function(data) {
  	console.log("add:url:" + data);
  	urlQueue.push(data.url);

  	socket.broadcast.emit('send:message', {
      text: "Queued url successfully"
  	});

  	socket.broadcast.emit('send:url', {
      url: data.url 
    });
  });
};
