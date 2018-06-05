
$(document).ready(function() {
    $(".close").on('click', function() {
        this.parentElement.style.display = 'none';
    })
    
    $('.portfolio-detail > i > img').on('click', function() {
        document.getElementsByClassName("modal-content2")[0].src = this.src;
        document.getElementsByClassName("modal2")[0].style.display = 'block';
        document.getElementsByClassName("modal2")[0].children[2].innerHTML = this.alt;
    });

    
    $(document).keydown(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            open(location, '_self').close();
        }
    });
})

