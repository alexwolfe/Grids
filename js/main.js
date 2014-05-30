$(document).ready(function(){

    //CREATE PAGE METHODS
    var page = {
        init: function() {
            this.grids = $('#main-nav a');

            this.activateNav();
            this.disableDemoGrids();
        },

        activateNav: function() {
            var that = this;

            this.grids.click(function(e) {
                e.preventDefault();
                var currentGrid = $(e.currentTarget);
                var gridId = currentGrid.attr('href');

                //DESELECT ALL Grids & SELECT CURRRENT ONE
                that.grids.parent().removeClass('selected');
                currentGrid.parent().addClass('selected');

                //ANIMATE SCROLL EFFECT
                $("html, body").animate({
                    scrollTop: $(gridId).offset().top - 100
                }, 'slow');

            });
        },

        disableDemoGrids: function() {
            $('.showcase .button').on('click', function(e) {
                e.preventDefault();
            });
        }
    };

    //INITIALIZE PAGE
    page.init();
});