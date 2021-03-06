
/**
 * Scroll up button
 * adapted from https://codepen.io/matthewcain/pen/ZepbeR
**/

const btn = $('#scroll-up__button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


/**
 * Fading headline with smooth transition
 * adapted from https://stackoverflow.com/questions/44782056/i-want-my-text-change-animation-in-javascript-to-have-smooth-transition
**/

const text = [
    'a Programmer',
    'a Mountain Hiker',
    'a Sea Diver',
    'a Nature Lover',
    'Faisal'
];
const elem = $("#headline");
let counter = 0;
setInterval(change, 3000);
function change() {
    elem.delay(1000).fadeOut(function () {
        elem.html(text[counter]);
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }
        elem.fadeIn();
    });
}
