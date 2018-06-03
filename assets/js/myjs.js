
$(document).ready(function() {
    $(".close").on('click', function() {
        this.parentElement.style.display = 'none';
    })
    
    $('.portfolio-detail > i > img').on('click', function() {
        this.parentElement.parentElement.getElementsByClassName("modal-content")[0].src = this.src;
        this.parentElement.parentElement.getElementsByClassName("modal")[0].style.display = 'block';
        this.parentElement.parentElement.getElementsByClassName("modal")[0].children[2].innerHTML = this.alt;
    });

    
    $(document).keydown(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            open(location, '_self').close();
        }
    });
})

