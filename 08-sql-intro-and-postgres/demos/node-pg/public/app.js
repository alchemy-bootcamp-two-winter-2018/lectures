'use strict';

pageLoad();

$('#user-form').on('submit', function(e) {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        age: e.target.age.value,
        ninja: e.target.ninja.value
    };

    $.post('/db/person', data)
        .then(function() {
            pageLoad();
        });

});


function pageLoad() {
    $.get('/db/person')
        .then(data => {
            console.log('pageLoad data:\n\n', data);
            $('#results').empty();

            data.rows.forEach(function(item) {
                const content = `
                    <h2>${item.name}</h2>
                    <p>age: ${item.age}</p>
                    <p>ninja: ${item.ninja}</p>
                `;
                $('#results').append(content);
            });

        }, err => console.error(err));
}
