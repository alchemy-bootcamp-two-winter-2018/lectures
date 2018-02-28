'use strict';

//                                                USING TEMPLATE LITERALS

const excited = '!!!!!!!';
const oldWay = 'We used the + sign to concat strings and variables' + excited;
// We used the + sign to concat strings and variables!!!!!!!
const newWay = `We use backticks instead of quotes${excited}, plus the dollar sign and curly braces${excited}`;
// We use backticks instead of quotes!!!!!!!, plus the dollar sign and curly braces!!!!!!!


//                                                USING ARROW FUN
let dog = {
    name: 'steve',
    rename: function (newName) {
        this.name = newName;
    },
    changeName: (newName) => {
        this.name = newName;
    }
};

dog.changeName('boop');  // won't change dog.name




//                                                CREATING TABS WITH JQUERY

// TODO replace these event listeners with jQuery event listeners
// const cakeTab = document.querySelector('[data-tab="cake"]');
// cakeTab.addEventListener('click', changeTabs);
// $('nav li:first-child').click(changeTabs);


// const iceCreamTab = document.querySelector('[data-tab="ice-cream"]');
// iceCreamTab.addEventListener('click', changeTabs);
// $('nav li:last-child').click(changeTabs);

$('[data-tab]').click(changeTabs);
function changeTabs () {
    // get the data-tab attribute of the link that was clicked
    // TODO use jQuery to get the data-tab value instead of getAttribute
                         // event.target.getAttribute('data-tab');

    const clickedTabData = $(this).attr('data-tab');
    // const clickedTabData = $(event.target).attr('data-tab');
    $('section').not(`#${clickedTabData}`).hide();
    $(`#${clickedTabData}`).show();

    // '#' + clickedTabData === `#${clickedTabData}`
    // $('section').not('#' + clickedTabData).hide();
    // $('section').not('#cake').hide();
    // 'section:not(#cake)'  === 
    // 'section:not(#' + clickedTabData + ')' ===
    // `section:not(#${clickedTabData})`

    // TODO hide all sections and reveal the appropriate section 
    // (note: the sections have ids to match the data-tab values)

}

// TODO simulate a click on the cake section so its open
$('[data-tab="ice-cream"]').click();


//                                                                    CAKE VIEW

/*                                                                     IN CLASS
    0. What is the overall purpose or goal of your function?
    1. If there are event listeners in your function, answer the following questions about them: 
        A. What element is the event listener being attached to? What line in `index.html` is it on?
        B. What event is the element listening for?
        C. What happens in the callback function?
    2. Where is your function's call site?
*/

const cakeView = {};

cakeView.init = function () {
    this.handleFlavor();
    this.handleIcing();
    this.handleNewIcing();
};

cakeView.handleIcing = function () {
    const $cakeLayers = $('#actual-cake div');
    $('select[name="icing"]').change( function () {
        $cakeLayers.css('border-color', $( this ).val());
    });
};

cakeView.handleFlavor = function () {
    const $cakeLayers = $('#actual-cake div');
    $('input[name="flavor"]').change( function () {
        $cakeLayers.css('background-color', $(this).val());
    });
};

cakeView.handleNewIcing = function () {
    $('#new-icing').hide();

    $('#cake button').click( function () {
        $('#new-icing').show();
    });

    $('#new-icing').submit( function () {
        event.preventDefault();

        const $colorInput = $(this).find('input');
        const color = $colorInput.val();
        const newOption = `<option value='${color}'>${color}</option>`;
        $('select[name="icing"]').append(newOption);

        $colorInput.val('');
    });
};

cakeView.init();






//                                                           ICE CREAM VIEW

const iceCreamView = {};

iceCreamView.init = function () {
    this.handleCone();
    this.handleCup();
    this.handleSurprise();
};

iceCreamView.handleCone = function () {
    // TODO add new scoops to the cone when the cone is clicked
    $('#cone').on('click', function () {
        $('[data-type="cone"] .scoop:first-child')
            .before($('<div class="scoop"></div>'));
    });

    // TODO change the "flavor" of a scoop in the cone when it is clicked
    // tell the parent div to listen, but only run if a .scoop child was clicked
    $('[data-type="cone"]').on('click', '.scoop', function () {
        $(this).toggleClass('mint');
    });
};

iceCreamView.handleCup = function () {
    console.log('handle cup runs!');

    // TODO when the cup is clicked, give it another scoop!
    $('#cup').on('click', function () {
        const $newScoop = $('<div class="scoop"></div>');
        $('[data-type="cup"] .scoop:first-child').before($newScoop);
    });

    // TODO when a scoop in the cup is clicked, change it to mint!
    $('[data-type="cup"] .scoop').on('click', function () {
        // event.target
        $(this).toggleClass('mint');
    });

};

iceCreamView.handleSurprise = function () {
    // TODO when the button is clicked, randomly color every scoop
    $('#ice-cream button').on('click', function () {
        $('.scoop').each(function () {
            $(this).css('background-color', randomColor());
        });
    });

    // helper function
    function randomColor () {
        const colors = ['peachpuff', 'lightblue', 'mistyrose', 'salmon', 'honeydew', 'navy', 'red', 'cyan', 'gold', 'orchid'];

        return colors[ Math.floor( Math.random() * colors.length ) ];
    }
};

iceCreamView.init();