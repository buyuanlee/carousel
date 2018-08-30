
# 利用jQuery做一个轮播
## 目标：做出一个的轮播
## 目的：学习jQuery的使用
## 实现过程
### 设计思路
**- 利用局部画面欺骗**         
**- 让画布滚动起来**
### 知识点
**- jQuery鼠标事件的三个写法**

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
**- 利于取模获取特定数字**

```javascript
for (let i = 0; i < x ; i++) {
    var result= i%x
    console.log(result)
}
//0,1,2,3,4,...,x-1
```

**- .eq()**

>如果一个**jQuery对象**表示一个**DOM元素的集合**，**.eq()**方法从集合的一个元素中构造**新的jQuery对象**。所提供的索引标识这个集合中的元素的位置。

```javascript
$('li').[2].css('background-color', 'red');
//错误。因为$('li').[2]是DOM对象，需要重新封装
$('li').eq(2).css('background-color', 'red');
//正确；.eq()方法构造了新的jQuery对象
```

**- .trigger()**

> **描述:** 根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为

```javascript
$('li').trigger('click')
```

**- .clearInterval()**

**属于DOM方法**

>clearInterval() 方法可取消由 setInterval() 设置的 timeout。                        
>clearInterval() 方法的参数必须是由 setInterval() 返回的 ID 值。

```javascript
.clearInterval(id_of_setinterval)
//id_of_setinterval:setInterval()返回的ID值
```



### **待解决问题：需要搞清楚jQuery里的 index()返回值。**








**——远方不远**
