var count=new Number();
var count= 501;
function start(){
    if ((count - 1)>= 0){
        count = count - 1;
        tempo.innerText = count;
        setTimeout('start();',1000); 
    }
}
$('.carousel').carousel({
  interval: 5000
})
	
$( function(e) { 	
    $('#sobre').click(function(e) {
        $('html, body').animate( { scrollTop: $('#tela1').offset().top } , 1000 );
    });
    $('#inicio').click(function(e) {
        $('html, body').animate( { scrollTop: $('.header1').offset().top } , 1000 );
    });

});		