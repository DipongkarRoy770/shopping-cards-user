//funtion:

function displayData(coffee,price,quntatity,total){
  console.log('product name colled')
  const Container =document.getElementById('table-container') ;
  const tr = document.createElement('tr')
  tr.innerHTML = `
  <td>${1}</td>
  <td>${coffee}</td>
  <td>${price}</td>
  <td>${quntatity}</td>
  <td>${total}</td>
  `
 Container.appendChild(tr)
}
//1st step : btn niya kaj kora hoice :
document.getElementById('by-now1').addEventListener('click',function(){
  const coffee = document.getElementById('coffee').innerText ;
  const price = document.getElementById('price-1').innerText ;
  const quntatity = document.getElementById('quntatity-1').innerText ;
  const total = parseInt(price)* parseInt(quntatity) ;
  displayData(coffee,price ,quntatity,total)
});
//2nd step:
document.getElementById('btn-2').addEventListener('click',function(){
  const  burn = document.getElementById('burn').innerText ;
  const priceTwo = document.getElementById('price-2').innerText ;
  const quntatityTwo = document.getElementById('quntatity-2').innerText ;
  const totalTwo = parseInt(priceTwo)+parseInt(quntatityTwo);
  displayData(burn ,priceTwo ,quntatityTwo ,totalTwo) ;
})
//3nd step:
document.getElementById('btn-3').addEventListener('click',function(){
  const  panda = document.getElementById('panda-three').innerText ;
  const priceThree = document.getElementById('price-3').innerText ;
  const quntatityThree = document.getElementById('quntatity-3').innerText ;
  const totalThree = parseInt(priceThree)/parseInt(quntatityThree);
  displayData(panda,priceThree ,quntatityThree ,totalThree) ;
})
//4th step :
document.getElementById('last-btn').addEventListener('click',function(){
  const umbrella = document.getElementById('umbrella').innerText ;
  const lastPrice = document.getElementById('last-price').innerText ;
  const lastQuntatity = document.getElementById('last-quntatity').innerText ;
  const totalValue = parseInt(lastPrice)-parseInt(lastQuntatity) ;
  displayData(umbrella,lastPrice ,lastQuntatity ,totalValue )
})
//5th step:
document.getElementById('input-btn').addEventListener('click',function(){
  const vue = document.getElementById('vue-js').innerText ;
  const input = document.getElementById('input-price').value ;
  const userQuntatity = document.getElementById('user-quntatity').value ;
  const totalOutput = parseInt(input)*parseInt(userQuntatity) ;
  displayData(vue , input ,userQuntatity ,totalOutput) ;
})