// =============== slick ======================
$(document).ready(function (){
    $('.slickk').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        arrows: false,
        speed: 5000,

    });
});

setTimeout(function(){
    slickObj.slick('slickSetOption', 'autoplay', true).slick('slickPlay');
},2000);

slickObj.on('touchstart mousedown', function(){
    slickObj.slick('slickPlay');
});

$(document).ready(function (){
    $open=false;
    
	function menuMb() {
		if($open==false){
			$open=true;
            $('#btn-menu').addClass('show-menu');
            $(".nav").addClass('show-menu');
		}else{
			$open=false;
            $('#btn-menu').removeClass('show-menu');
            $(".nav").removeClass('show-menu');
		}
	}
    
	$('#btn-menu').on('click',function() {
		menuMb();
	});
    
    $('.menu-wrap a').on('click',function() {
		menuMb();
	});
});
