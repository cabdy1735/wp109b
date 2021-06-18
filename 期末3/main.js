
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
  <td><img src="picture/anna-bratiychuk-JUXybvdckeM-unsplash.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td><ul>
  <li>商品:蛋糕</li>
  <li>味道:甜味</li>
  <li>規格:長12.6cm，寬5.2cm，高度4.5cm</li>
  <li>另贈:草莓、巧克力糖將</li>
</ul></td>
  <td>Unsplash</td>
  <td>150</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/kaboompics_Christmas decorations - gifts - lights - tree -.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td>海灘裝飾組</td>
  <td>Kaboompics</td>
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
  <td><img src="picture/kaboompics_Cup of coffee - Zara Home.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td><p>咖啡</p>
  <h5>刺激中樞神經系統特別是腦細胞，興奮大腦皮質，使人提高警惕性、情緒激昂、睡意降低並減輕疲勞，維持持久的工作能力。<h5>
  提高身體基礎代謝，抗老化，具有利尿作用，並能刺激腸胃蠕動，幫助排便。
  <h5>來源:wiki
</td>
  <td>Kaboompics</td>
  <td>500</td>
  <td><button onclick="Order.start()">前往購買</button></td>
</tr>
<tr>
  <td><img src="picture/kaboompics_Different Types Of Sushi - Japanese Food Style.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td><p>卷壽司</p>太卷、裏卷</td>
  <td>Kaboompics</td>
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
  <td><img src="picture/farzad-mohamadi-QJKazBRVHx4-unsplash.jpg" alt="圖片顯示不出" width="300px" ></td>
  <td><h2>香氛蠟燭</h2><p>無煙蠟燭</td>
  <td>Unsplash</td>
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