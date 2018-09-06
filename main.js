$(window).load(function(){



    //GA Onclick
	$('header .logo').on('click', function() {
		ga('send', 'event', 'Click', 'Logo' + $(this).attr('href') , $(this).attr('href') );
	});
	$('nav a.link').on('click', function() {
		ga('send', 'event', 'Click', 'Nav: ' + $(this).text() , $(this).attr('href') );
	});
	$('nav .facebook').on('click', function() {
		ga('send', 'event', 'Click', 'Facebook', $(this).attr('href') );
	});

    //Add class if loaded middle of page
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }

    //Add class on scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });



    //Smooth Scroll on Click
    $(function() {
		$('header .top, nav .link').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					 	scrollTop: target.offset().top - 125
					}, 500);
					return false;
				}
			}
		});
	});



});
