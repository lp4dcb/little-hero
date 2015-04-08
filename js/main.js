$(function() {
 
    //simulate infinite loading
         var visibleHeight = $(document).height() - $(window).height();
    var items;

    storeElements();

    $(window).on('resize', function(e) {
        updateHeight();
    });

    $(window).on('scroll', function(e) {
        loadContent();
    });

    function loadContent() {

        if($(window).scrollTop() >= visibleHeight) {

            $(window).unbind('scroll');

            var loadingWrap = $('.loading');

            loadingWrap.fadeIn(function() {
                setTimeout(function() {
                    loadingWrap.before(items);
                    loadingWrap.hide(function() {
                        updateHeight();
                        storeElements();
                        $(window).on('scroll', function() { loadContent(); });
                    });
                }, 600);
            });

        }
    }

    function updateHeight() {
        visibleHeight = $(document).height() - $(window).height();
    }

    function storeElements() {
        items = $('.scene-item:lt(3)').clone();
        
    }
    
    $('.nav .nav-list .nav-title').on('click', function(e) {
        $(this).next('.sub-menu').slideToggle('.open');
        updateHeight();
        e.preventDefault(); return false;
    });
    
    $(window).resize(function(){
				if ( $(window).width()>=760 ){
					$('.sub-menu').show();
				} else{
					$('.sub-menu').hide();
				}
			});
    
});