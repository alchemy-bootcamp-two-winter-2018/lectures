'use strict';

(function(module) {

    const homeView = {};

    homeView.init = () => {
        $('.view').hide();
        $('#home-view').show();
    };

    module.homeView = homeView;

})(window.module);