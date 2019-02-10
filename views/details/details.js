var timeNode = document.querySelector('#time');

var displayCurrentTime = function() {
    var now = new Date();

    timeNode.innerHTML = [
        now.getHours(),
        now.getMinutes(),
        now.getSeconds()
    ].join(':');
};

displayCurrentTime();
setInterval(displayCurrentTime, 1000);