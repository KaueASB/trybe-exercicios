// api.js
// const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');


  //Maneira para filtrar por rank, trazendo apenas as 10 primeiras

  coins
  .filter((coin) => Number(coin.rank) <= 10)
  .forEach((coin) => {
    const newLi = document.createElement('li');

    newLi.innerText = `${coin.rank} - ${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
    
    coinsList.appendChild(newLi);
  });

  // coins.forEach((coin) => {
  //   const newLi = document.createElement('li');
  //   const usdPrice = Number(coin.priceUsd);

  //   newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

  //   coinsList.appendChild(newLi);
  // });
}

window.onload = () => setCoins();