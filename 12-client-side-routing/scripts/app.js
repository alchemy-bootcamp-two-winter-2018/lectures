'use strict';

(function(module) {

    const homeView = module.homeView;
    const aboutView = module.aboutView;
    const stuffView = module.stuffView;

    page('/', () => homeView.init());
    page('/about', () => aboutView.init());
    page('/stuff', () => stuffView.init());
    page('/stuff/:id', (ctx) => stuffView.initDetail(ctx.params.id));

    page({ hashbang: true });

})(window.module);