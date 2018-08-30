# 利用jQuery做一个轮播
## 目标：做出一个的轮播
## 目的：学习jQuery的使用
## 实现过程
### 设计思路
**- 利用局部画面欺骗**         
**- 让画布滚动起来**
### 知识点
**- jQuery点击事件的三个写法**
```javascript
$(obj).on('click',function(){})
//写法一；标准jQuery写法
$(obj).click(function(){})
//写法二；注意此处是click，不是onclick
$(obj)[0].onclick = function(){}
//写法三：jQuery对象加上DOM方法
// jQuery的对象要使用JS的API，必须先转义成DOM对象！！！
```
**- 让图片移动的2种方法**
```javascript
transform:'translateX(-960px)'
//方法一
'margin-left':'-960px';
//方法二
```
**- 优化代码**
```javascript
var buttons = $('button')
for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click', function (x) {
        $(images).css({
            transform: 'translate('+ i * -960 +'px)'
        })
    })
}
```








**——远方不远**