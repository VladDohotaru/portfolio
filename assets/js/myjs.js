
$(document).ready(function() {
    $(".close").on('click', function() {
        this.parentElement.style.display = 'none';
    })
    
    $('.gallery-row > a').on('click', function() {
        document.getElementsByClassName("mfp-title")[0].innerHTML = $(this)[0].children[0].alt;
    });
    
    $(".moreBox").slice(0, 3).show();
    if ($(".blogBox:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 6).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
})

