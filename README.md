# practiceCode
只是手写代码代码储存

## 全选和取消全选

```html

  <input type="checkbox" class="totalCheck">
  </div>
  <div style="background:lightblue">
      <input type="checkbox" class="checkItem">
      <input type="checkbox" class="checkItem">
      <input type="checkbox" class="checkItem">
    
  </div>

```

```javascript

var total = document.querySelector(".totalCheck")
var checkItems = document.querySelectorAll(".checkItem")
total.addEventListener("click", handleTotal)
function handleTotal() {
  checkItemsFn(this.checked)
}
function checkItemsFn(boolean) {
  checkItems.forEach(function (item) {
    item.checked = boolean
  })
}
function handleCheckItem() {
  var len = checkItems.length
  var checkes = 0
  checkItems.forEach(function (item) {
    checkes = item.checked ? checkes + 1 : checkes
    total.checked = checkes === len
  })
}

checkItems.forEach(function (item) {
  item.addEventListener("click", function () {
    handleCheckItem()
  })

})

```

## 预览地址

https://jsbin.com/hipihiwami/1/edit?html,js,console,output


## 随机生成大小不一样，颜色不一样，位置不一样的方块



```html

<div id="container">
  </div>

```

```css

#container{
  width:500px;
  height:500px;
  border:1px solid blue;
}

```

```javascript

var container = document.getElementById("container")
var box =document.createElement("div")

box.id = 'box'
var boxWidth =50,
    boxHeight=50;
function getColor (){
  var arr = ["A","B","C","D","E","F"]
  var str=""
  for(var i =0;i<6;i++){
    var randomNum = Math.floor(Math.random()*arr.length)
    str+=arr[randomNum]
  }

  return str;
}


var pos={
  x:0, 
  y:0,
}

function getRandomWidth(){
  var width = Math.floor(Math.random()*500)+1
  boxWidth=width
  boxHeight=width
}


function getRandomPos(){
  var x = Math.floor(Math.random()*(container.offsetWidth-boxWidth))
  var y = Math.floor(Math.random()*(container.offsetHeight-boxHeight))
  pos.x=x
  pos.y =y

}
function rander(){
getRandomWidth()
  getRandomPos(); 

   box.style.position="relative"
box.style.width=`${boxWidth}px`
box.style.height=`${boxHeight}px`
box.style.left=`${pos.x}px`; 
box.style.top=`${pos.y}px`;
 
  box.style.background=`#${getColor()}` 
container.appendChild(box) 

}  
rander()
 var timer =setInterval(function(){
   rander()

 },1000)

```



## 预览地址
https://jsbin.com/qorazosoji/1/edit?html,css,js,console,output
