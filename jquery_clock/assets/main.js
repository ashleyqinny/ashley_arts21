$(function() {
  var $clockText = $('#clock-text');
  var $hour = $('#hour');
  var $minute = $('#minute');
  var $second = $('#second');
  
  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var clockUpdateSpeed = 30; // speed in milliseconds

    $hour.css('transform', 'translate(0vh, ' + (100/24 * h) + 'vh)');
    $minute.css('transform', 'translate(0vh, ' + (100/60 * m) + 'vh)');
    $second.css('transform', 'translate(0vh, ' + (100/60 * s) + 'vh)');

    setTimeout(updateClock, clockUpdateSpeed);
  }
  updateClock();
});


