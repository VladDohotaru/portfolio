
$(document).ready(function() {
    $(".close").on('click', function() {
        this.parentElement.style.display = 'none';
    })
    
    $('.gallery-row > a').on('click', function() {
        document.getElementsByClassName("mfp-title")[0].innerHTML = $(this)[0].children[0].alt;
    });
})

