const CURRENCIES_DATA_API_URL = 'https://economia.awesomeapi.com.br/json/all';

async function fetchCurrenciesData() {
  const response = await fetch(CURRENCIES_DATA_API_URL);
  const data = await response.json();

  delete data.USDT;
  delete data.BTC;
  delete data.LTC;
  delete data.ETH;
  delete data.XRP;
  delete data.DOGE;

  return Array(data);
}

export default fetchCurrenciesData;
