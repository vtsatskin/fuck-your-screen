'use strict';

/* Controllers */

function AppCtrl($scope, socket) {
  socket.on('send:name', function (data) {
    $scope.name = data.name;
  });
}

function MyCtrl1($scope, socket) {
  socket.on('send:time', function (data) {
    $scope.time = data.time;
  });
}
MyCtrl1.$inject = ['$scope', 'socket'];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function ViewPage($scope, socket) {
  socket.on('send:url', function (data) {
    $scope.url = data.url;
  });
}
ViewPage.$inject = ['$scope', 'socket'];

function AddPage($scope, socket) {
  socket.on('send:message', function (data) {
    console.log("recieved message: " + data.text);
  });

  $scope.addUrl = function () {
    socket.emit('add:url', {
      url: $scope.url
    }, function (result) {
      if (!result) {
        alert('There was an error adding your url');
      } else {
        console.log("sweet!");
        // changeName($scope.name, $scope.newName);

        // $scope.name = $scope.newName;
        // $scope.newName = '';
      }
    });
  };
}

