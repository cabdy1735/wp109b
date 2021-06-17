
const main = document.querySelector('main')

function show(html) {
  main.innerHTML = html  
}
const Shop = {
  items: {'娃娃': 50, '綠茶': 30, '珍珠奶茶': 35,'貼紙':10}
  }
Shop.html = `
<div style="width:100%">
<table class=all>
<tr>
  <th style="width:300px">品項</th>
  <th style="width:auto">描述</th> 
  <th style="width:100px">價格</th>
  <th style="width:70px">購買</th>
</tr>
<tr>
  <td ><img src="picture/IMG_20210220_231158.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td >娃娃主商品：台糖詩丹雅蘭 ALL IN ONE頂級黃金全效修護精華*5瓶
  容量：30g/瓶.
  成分：Water(Aqua), Dimethicone, Dimethicone PEG-10/15 Crosspolymer, Sodium Hyaluronate, Xanthan Gum,...請見外盒成分標示.
  保存期限：3年
  產地：台灣
  適用對象 : 任何膚質均適用。</td>
  <td>50</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/IMG_20210209_224619.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td>綠茶</td>
  <td>20</td>
  <td><button onclick="Order.start()">前往購買</button></td>

</tr>
<tr>
  <td><img src="picture/EZV0kpAU4AIZmMn.png" alt="圖片顯示不出" width="300px" ></td>
  <td>綠茶</td>
  <td>20</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/EZV0kpAU4AIZmMn.png" alt="圖片顯示不出" width="300px" ></td>
  <td>綠茶</td>
  <td>20</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>

</div>
`
Shop.start = function () {
  const itemsJson = localStorage.getItem('Shop.items')
  if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
  
  show(Shop.html)
}



