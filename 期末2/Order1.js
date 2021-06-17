const Order = {
  totalPrice:0,
  submitted: false
}

Order.html = `
<table class="all">
<thead>
  <tr>
    <td>
      <select id="items" onchange="calcPrice()"></select>
    </td>
    <td><input id="price" type="number" value="0"></td>
    <td>
      <input id="quantity" type="number" value="1">
      <!-- <button onclick="quantity.value=parseInt(quantity.value)+1">+1</button> -->
      <button onclick="addItem()">新增</button>
    </td>
  </tr>
  <tr><th>商品</th><th>單價</th><th>數量</th></tr>
</thead>
<tbody id="orderTableBody">
  <tr><td>&nbsp;</td><td></td><td></td></tr>
</tbody>
</table>
<br/>
<div class="all" style="width:370px">
  <label>總價:</label>
  <input id="totalPrice" type="number" value="0">
  <button id="submit" onclick="submit()">送出訂單</button>
  <button id="abort" onclick="abort()">放棄訂單</button>
  <br/><br/>
  <button id="goShop" onclick="Shop.start()">回主選單</button>
  <button id="newOrder" onclick="newOrder()" disabled="disabled">新增下一筆</button>
  <br/><br/>
</div>
`

function goShop() {
  if (!Order.submitted) {
    if (confirm('您的訂單尚未送出，請問是否要放棄該訂單？')) {
      Shop.start()
      return
    } else {
      return
    }
  }
  Shop.start()
}

function newOrder() {
  Order.start()
}

function abort() {
  if (confirm('確定要放棄本訂單？')) {
    Order.reset(Order)
    Order.start()
  }
}

var quantityControl, priceControl, itemSelect,  orderTableBody, totalPriceControl,goods

Order.start = function () {
  show(Order.html)
  quantityControl = document.getElementById('quantity')
  priceControl = document.getElementById('price')
  itemSelect = document.getElementById('items')
  orderTableBody = document.getElementById('orderTableBody')
  totalPriceControl = document.getElementById('totalPrice')
  submitButton = document.getElementById('submit')
  abortButton = document.getElementById('abort')
  newOrderButton = document.getElementById('newOrder')
  
  itemSelect.innerHTML = optionList(Shop.items)
  
  calcPrice()
  /*if (localStorage.getItem('pos.Order.count') == null)
    localStorage.setItem('pos.Order.count', 0)*/
}


Order.reset = function (Order) {
  Order.totalPrice = 0
  Shop.records = []
  Order.submitted = false
}

function submit() {
  console.log('submit()')
  if (Order.records.length === 0) {
    alert('您的訂單是空的，無法送出！')
    return
  }
  /*let orderCount = parseInt(localStorage.getItem('pos.Order.count')) + 1
  localStorage.setItem('pos.Order.'+orderCount, JSON.stringify(Order))
  localStorage.setItem('pos.Order.count', orderCount)*/
 
  Order.submitted = true
  submitButton.disabled = 'disabled'
  submitButton.innerHTML = '已送出'
  abortButton.disabled = 'disabled'
  newOrderButton.disabled = ''
}

function optionList(list) {
  let r = []
  for (let name in list) {
    let price = list[name]
    r.push('<option value="'+name+':'+price+'">'+name+'</option>')
  }
  return r.join('\n')
}

Order.list = function () {
  let records = Shop.records
  let list = []
  for (let i=0; i<records.length; i++) {
    list.push(`<tr><td>${records[i].name}</td><td>${records[i].price}</td><td>${records[i].quantity}</td></tr>`)
  }
  return list.join('\n')
}

function calcPrice() {
  let [item, itemPrice] = itemSelect.value.split(':')
  let price = parseInt(itemPrice)
  priceControl.value = price
  return {item, price}
}


function addItem() {
  let {item, price} = calcPrice()
  let quantity = parseInt(quantityControl.value)
  let record = {name: item, price: price, quantity: quantity}
  Shop.records.push(record)
  orderTableBody.innerHTML = Order.list()
  Order.totalPrice += price * quantity
  totalPriceControl.value = Order.totalPrice
}
