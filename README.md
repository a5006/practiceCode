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

![img](https://github.com/a5006/practiceCode/blob/master/1/image/show.jpg)


