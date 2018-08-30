var buttons = $('button')
for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click', function (x) {
        $(images).css({
            transform: 'translate(' + i * -960 + 'px)'
        })
        n = i
        buttons.eq(n)
            .addClass('active')
            .siblings('.active').removeClass('active')
    })
}


var n = 0;
var frequency = buttons.length

var timerId = setInterval(() => {
    n += 1
    buttons.eq(n % frequency).trigger('click')
        .addClass('active')
        .siblings('.active').removeClass('active')
}, 2000)

$('.window').mouseenter(function () {
    window.clearInterval(timerId)
})
$('.window').mouseleave(function () {
    timerId = setInterval(() => {
        n += 1
        buttons.eq(n % frequency).trigger('click')
            .addClass('active')
            .siblings('.active').removeClass('active')
    }, 2000)
})