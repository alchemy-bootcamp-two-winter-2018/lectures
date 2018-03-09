'use strict';

(function (module) {

    const template = Handlebars.compile($('#pet-template').html());
    
    function Pet(data) {
        Object.keys(data).forEach(key => this[key] = data[key]);
    }
    
    Pet.prototype.toHtml = function() {
        return template(this);
    };
    
    Pet.all = [];
    
    Pet.fetchAll = function(callback) {
        $.getJSON('/pets')
            .then(rawPetsData => {
                Pet.all = rawPetsData.map(rawData => new Pet(rawData));
                if(callback) callback();
            })
            .catch(console.log);
    };

    module.Pet = Pet;

})(window.app || (window.app = {}));