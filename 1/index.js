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