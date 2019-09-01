$(document).ready(function () {
  // action when dismiss button or outside region of sidebar is clicked
  $('#dismiss').on('click', function () {
      $('#sidebar').removeClass('active');
  });
  
  // action when sidebar button is clicked (opens side menu)
  $('#showSidebar').on('click', function () {
      $('#sidebar').addClass('active');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});
