'use strict';

(function(module) {

    const stuffView = {};

    stuffView.init = () => {
        $('.view').hide();
        $('#stuff-view').show();
    };
    
    stuffView.initDetail = id => {
        $('.view').hide();
        $('#stuff-detail-view').show();
        $('#stuff-id').text(id);
    };

    module.stuffView = stuffView;

})(window.module);