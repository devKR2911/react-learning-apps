const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
import { TIME_SERIES_DAILY } from "../data/TIME_SERIES_DAILY";

const BASE_URL = "https://www.alphavantage.co/query?";

export async function fetchJSON(queryParams) {
  const URL = `${BASE_URL}${new URLSearchParams({
    ...queryParams,
    apikey: API_KEY,
  })}`;

  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("AlphaVantage API request failed");
  }
  return response.json();
}

// eslint-disable-next-line no-unused-vars
export async function getDailyPerformance(ticker) {
  // const params = {
  //   function: "TIME_SERIES_DAILY",
  //   symbol: ticker,
  // };
  // const jsonData = await fetchJSON(params);
  const jsonData = await new Promise((resolve) => {
    setTimeout(() => resolve(TIME_SERIES_DAILY), 500);
  });

  const timeSeries = jsonData["Time Series (Daily)"];

  if (!timeSeries) {
    return null;
  }

  const [latestDate, previousDate] = Object.keys(timeSeries);

  if (!latestDate || !previousDate) {
    return null;
  }

  const lastClose = parseFloat(timeSeries[latestDate]["4. close"]);
  const prevClose = parseFloat(timeSeries[previousDate]["4. close"]);

  const performance = ((lastClose / prevClose - 1) * 100).toFixed(2);

  return performance;
}
