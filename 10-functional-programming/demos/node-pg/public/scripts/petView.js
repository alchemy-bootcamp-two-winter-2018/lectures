'use strict';

(function(module) {
    // What do you need (import or require) from prior modules?
    const Pet = module.Pet;

    const petView = {};
    
    petView.initIndexPage = () => {
        petView.loadPets();
    };
    
    petView.loadPets = () => {
        Pet.all.forEach(pet => {
            $('#pets').append(pet.toHtml());
        });
    };

    // What does your module export
    module.petView = petView;

})(window.app || (window.app = {}));