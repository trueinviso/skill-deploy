$( document ).on("turbolinks:load", function() {
	$(function() {
	    $('[type=file]').fileupload({
        dataType: "script",
        method: "PUT",
	    });
	  });
	$('.profile-picture__delete-button').click(function(e) {
    $.ajax({
      url: $('.profile-picture__delete-button').data("url"),
      method: "DELETE"
    });
  });
});
