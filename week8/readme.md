#作業 2
請寫一個程式可以印出指定數量的 * 號
例如： star(5) 會印出 5 個 * 號

star(5)

請寫一個函數可以印出 a..b 之間的所有整數
例如： between(3,8) 會印出

3 4 5 6 7 8
*****
第一題
檔案 : star.js
```
function star(n) {
  for (var i=0; i<n; i++)
    console.log('*')
}

star(5)
```
*****
執行結果

(base) csienqu-teacher:02 csienqu$ deno run star.js
*
*
*
*
*