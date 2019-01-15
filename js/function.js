/*===============================================
	Original Author: Alexandr Izumenko
================================================*/

$(document).ready(function() {
  $(".container_a").click(function() {
    $(".stick").toggleClass(function () {
      return $(this).is('.open, .close') ? 'open close' : 'open';
    });
  });
});
0




