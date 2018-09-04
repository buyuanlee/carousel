//获取对象
var buttons = $('button')


//遍历button列表，添加点击事件与属性
for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).click(function (x) {
        $(images).css({
            transform: 'translate(' + i * -960 + 'px)'
        })
        n = i
        console.log(n)
        btnActive(buttons.eq(n))
    })
}

//调用播放函数
var n = 0;
var frequency = buttons.length
playSlide(n % frequency)
var timerId = setTimer()

//鼠标移入取消轮播(取消setInterval)
$('.window').mouseenter(function () {
    window.clearInterval(timerId)
})

//鼠标移除恢复轮播(开启setInterval)
$('.window').mouseleave(function () {
    timerId = setTimer()
})

//封装class函数
function btnActive($button) {
    $button.addClass('active')
        .siblings('.active').removeClass('active')
}

//封装点击函数
function playSlide(i) {
    buttons.eq(i).trigger('click')
}

//封装计时器函数
function setTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % frequency)
    }, 2000)
}