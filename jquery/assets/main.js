$(function() {
  $(document).on('keypress', function(e) {
  		if(e.code == 'KeyA') {
    		$(".a").toggle();
    	}
    	else if(e.code == 'KeyS') {
    		$(".s").toggle();
    	}
    	else if(e.code == 'KeyH') {
    		$(".h").toggle();
    	}
    	else if(e.code == 'KeyL') {
    		$(".l").toggle();
    	}
    	else if(e.code == 'KeyE') {
    		$(".e").toggle();
    	}
    	else if (e.code == 'KeyY') {
    		$(".y").toggle();
    	}
  });
});