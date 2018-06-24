
$(document).ready(function() {
    $(".close").on('click', function() {
        this.parentElement.style.display = 'none';
    })
    
    $('.gallery-row > a').on('click', function() {
        document.getElementsByClassName("mfp-title")[0].innerHTML = $(this)[0].children[0].alt;
    });
    
    $(".moreBox").slice(0, 9).show();
    if ($(".blogBox:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $(window).scroll(function(e) {
      e.preventDefault();
      const end = $("#page-footer").offset().top;
      const viewEnd = $(window).scrollTop() + $(window).height();
      const distance = end - viewEnd;
      if (distance < 250) {
        $(".moreBox:hidden").slice(0, 6).slideDown();
      }
  });
})

