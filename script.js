var game = {
    numCookies:0,
    cookiesPerClick:1,
    upgradeCosts:[10],
    displayCookies: function() {
    	if (this.numCookies === 1) {
            $("#numCookies").html("1 cookie");
        } else {
            $("#numCookies").html(this.numCookies + " cookies");
        }
    },
    displayCostColors: function() {
    	for (var i=0; i<this.upgradeCosts.length; i++) {
        	if (this.numCookies >= this.upgradeCosts[i]) {
        		$("#upgrade" + i + " .upgradeCost").css("color", "#007700");
        	} else {
        		$("#upgrade" + i + " .upgradeCost").css("color", "#bb0000");
        	}
        }
    }
};

$(document).ready(function() {
    $("#cookie").click(function() {
        game.numCookies+=game.cookiesPerClick;
        game.displayCookies();
        game.displayCostColors();
    });

    $("#cookie").mousedown(function() {
        $(this).width("290px");
        $(this).height("290px");
        $(this).css("margin-top", "13px");
        $(this).css("margin-bottom", "5px");
    });

    $("#cookie").mouseup(function() {
        $(this).width("300px");
        $(this).height("300px");
        $(this).css("margin-top", 0);
        $(this).css("margin-bottom", 0);
    });

    $("#upgrade0").click(function() {
    	if (game.numCookies >= game.upgradeCosts[0]) {
    		game.cookiesPerClick*=2;
    		game.numCookies-=game.upgradeCosts[0];
    		game.displayCookies();
    		game.displayCostColors();
    	}
    });

    $('div[id^="upgrade"]').mouseenter(function() {
        $(this).fadeTo('fast', 1);
    });

    $('div[id^="upgrade"]').mouseleave(function() {
        $(this).fadeTo('fast', 0.8);
    });
});