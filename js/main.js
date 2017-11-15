(function() {
  'use strict';

  var comment = document.getElementById('comment');
  var label = document.getElementById('label');
  var LIMIT = 30;

  label.innerHTML = LIMIT;

  comment.addEventListener('keyup', function() {
    var remaining = LIMIT - this.value.length;

    label.innerHTML = remaining;
  });
})();
