
const main = document.querySelector('main')

function show(html) {
  main.innerHTML = html  
}
const Shop = {
  items: {'娃娃': 50, '綠茶': 30, '珍珠奶茶': 35,'貼紙':10},
  records: [],
  }

Shop.html = `

<div style="width:100%">
<table class="all">
<thead>
<tr>
  <th style="width:300px">品項</th>
  <th style="width:auto">描述</th> 
  <th style="width:100px">圖片來源</th>
  <th style="width:100px">價格</th>
  <th style="width:70px">購買</th>
</tr>
</thead>

<tbody>
<tr>
  <td><img src="picture/Eqz3tSLVkAEh_jP.jfif" alt="圖片顯示不出" width="300px" ></td>
  <td><ul>
  <li>商品:海報</li>
  <li>角色:本間ひまわり</li>
  <li>規格:50x70公分</li>
  <li>另贈:DIY萬用收納夾</li>
</ul></td>
  <td>望月けい</td>
  <td>150</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/Eymt56OUcAMG28S.jfif" alt="圖片顯示不出" width="300px" ></td>
  <td>貓耳女僕卡片</td>
  <td>山吹色</td>
  <td>50</td>
  <td><button  onclick=Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/pastel-macaron-pyramid-on-pink.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td>
  <p>馬卡龍</p>
  <p>又稱作瑪卡龍、法式小圓餅、杏仁小圓餅、蛋白杏仁甜餅，是一種用色彩繽紛絢麗的法國甜品
  ，外殼堅硬但易碎，內陷黏稠扎實，口感其妙，因為其極度可愛優雅，馬卡龍色也成為了一種時尚配色方案。
  馬卡龍由蛋白或aquafaba、糖粉、蔗糖、扁桃仁粉以及蛋白脆餅為基礎，在兩塊餅乾之間夾有甘納許、奶油乳酪或果醬等內餡，再依據其品質採用有機、天然或人工的食用色素調色。</p>
  
  <p>來源:wiki</p>
  </td>
  <td>Burst</td>
  <td>200</td>
  <td><button onclick="Order.start()">前往購買</button></td>

</tr>
<tr>
  <td><img src="picture/EZV0kpAU4AIZmMn.png" alt="圖片顯示不出" width="300px" ></td>
  <td><p>雷丘玩偶</p>
  <h5>玩偶採用氨倫超柔高彈力布料，延展性佳、細緻柔軟、親膚透氣，觸感舒服好摸。<h5>
內部填充台灣製、綿滑細緻的長纖棉花，蓬鬆、彈性回復性佳，不怕擠壓。
<h5>文字來源:https://24h.pchome.com.tw/prod/DECU1L-A900ARLJ4?fq=/S/DECU1G</td>
  <td>山吹色</td>
  <td>500</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/EtYHIy_VcAAYyGW.jfif" alt="圖片顯示不出" width="300px" ></td>
  <td><p>魔法少女小圓:十周年紀念</p>鹿目圓、曉美焰</td>
  <td>山吹色</td>
  <td>2000</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/hand-holds-a-pink-mason-jar-filled-with-paint-brushes.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td><p>文具套組</p>
  <ol>內容物
  <li>鉛筆</li>
  <li>自動鉛筆</li>
  <li>自動鉛筆筆芯</li>
  <li>原子筆</li>
  <li>中性筆</li>
  <li>魔擦鋼珠筆</li>
  <li>水彩筆</li>
</ol></td>
  <td>Burst</td>
  <td>1800</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/flowers-in-yellow-watering-can.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td><h2>澆水器盆栽</h2></td>
  <td>Burst</td>
  <td>70</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/EuGwr8sUUAMiZBj.jfif" alt="圖片顯示不出" width="300px" ></td>
  <td><h2>女々しくて / covered by 卯月コウ, 剣持刀也, シェリン・バーガンディ</h2><p>這張很帥，然而MV太好笑了</td>
  <td>望月けい</td>
  <td>450</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
</tbody>
</table>
</div>

`
Shop.start = function () { 
  const itemsJson = localStorage.getItem('Shop.items')
  if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
  
  show(Shop.html)
}