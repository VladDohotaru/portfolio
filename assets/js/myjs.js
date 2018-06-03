var elem = $( '#myModal' )[0];


$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $( elem ).hide();
    }
});

$(".close").on('click', function() {
    this.parentElement.style.display = 'none';
})

$('.portfolio-detail > i > img').on('click', function() {
    this.parentElement.parentElement.getElementsByClassName("modal-content")[0].src = this.src;
    // $('# #img01').attr('src', this.src);
    this.parentElement.parentElement.getElementsByClassName("modal")[0].style.display = 'block';
    // $('#modal_test #img01').css('display', 'block');
    // alert($('#myModal').src);
    
})