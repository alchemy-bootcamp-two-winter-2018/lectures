'use strict';

(function(module) {

    const aboutView = {};

    aboutView.init = () => {
        $('.view').hide();
        $('#about-view').show();

        // add something
    };

    module.aboutView = aboutView;

})(window.module);