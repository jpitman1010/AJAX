"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
    $.get('/fortune', (response) => {
        $('#fortune-text').html(response);
    });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
    evt.preventDefault();

    const formData = {
        zipcode: $('#zipcode-field').val()
    };


    $.get('/weather', formData, (response) => {
        $('#weather-info').html(`${response.forecast} ${response.temp}`);


    });


});


// Part 3

$("#order-form").on('submit', (evt) => {
    evt.preventDefault();

    qty: $('#qty-field').val();
    melonType: $('#melon-type-field').val();
};


$.post('/order-melons', formData, (response) => {
    $('#order-status').html(`${melonType} ${qty}`);


});
//
// In the callback function, use the response from the server to
// update #order-status. IMPORTANT: if the result code is 'ERROR',
// make it show up in red.
});