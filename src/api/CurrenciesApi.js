const CURRENCIES_API_URL = 'https://economia.awesomeapi.com.br/json/all';

async function fetchCurrencies() {
  const response = await fetch(CURRENCIES_API_URL);
  const data = await response.json();
  delete data.USDT;
  delete data.BTC;
  delete data.LTC;
  delete data.ETH;
  delete data.XRP;
  delete data.DOGE;

  return Array(data);
}

export default fetchCurrencies;
