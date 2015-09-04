(function() {
  "use strict";

  var removePagelet = function() {
    try {
        document.getElementById('pagelet_navigation').innerHTML = '';
    } catch(err) {
      console.log(err);
    }
    console.log('Pagelet Nav removed.');
    setTimeout(function() { removePagelet(); }, 5000);
  }
  removePagelet();

}());
