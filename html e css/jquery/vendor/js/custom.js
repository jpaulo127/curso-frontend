//instancia jQuery e evita confritos
//jQuery(function($){
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
      
let titulo = $('h4');//ta
let text = $('.feature-item');//class
let destaque = $('#featured');//id

//configuração de produtos

//$('.featured-item button').addclass('btn btn-dark stretch-link');

//$('.featured-item:firt h4').append('<spam class= "badger bg-secondary">novo<\spam>');

//$('.featured-item;firts h4').start('<spam class="badger bg-secondary">novo</sapam>');

$('.featured-item h4').append('<span class="badger bg-secondary">novo</span>');

$('.featured-item h4').before('texto simpes');
});

//$('featured-item:first h4').addclass('active')

//$('.featured-item-first h4').removeclass('active')

//$('.featured-item:first h4')toggleclass('active')

//$('.featured-item').hide()

//$('.featured-item').show()

//$('.featured-item').fade()

$('.featured-item button').css({
    'color':'#ff0',
    'background':'#000',
     

})

$('.featured-item h4').dblclick( function(){

      $(this).css({
        'color':'#f00',
        'background':'#ff0',
        'font-weinght':'100'
})

});

$('.featured-item button').on('blur',function(event){

event.preventDefault();

alert('produto esgotado');
})


