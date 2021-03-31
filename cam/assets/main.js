$(function() {
  $(document).on('keypress', function(e) {
  		if(e.code == 'KeyC') {
    		$(".c").toggle();
    	}
    	else if(e.code == 'KeyA') {
    		$(".a").toggle();
    	}
    	else if(e.code == 'KeyM') {
    		$(".m").toggle();
    	}
    	else if(e.code == 'KeyE') {
    		$(".e").toggle();
    	}
    	else if(e.code == 'KeyR') {
    		$(".r").toggle();
    	}
    	else if (e.code == 'KeyO') {
    		$(".o").toggle();
    	}
        else if (e.code == 'KeyN') {
            $(".n").toggle();
        }
  });
});