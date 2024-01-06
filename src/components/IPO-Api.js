const apiKey = "pk_d9ded09f8f0d479eaaa9411adfcb09a3";

export async function upcomingIpo(query) {
  try {
    const url = `https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("IPO result ------", data);
    return data;
  } catch (err) {
    console.log("An error has occured:", err);
  }
}
upcomingIpo();

export async function exchangeIpo(query) {
  try {
    const url = `https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("IPO exchange result ------", data);
    return data;
  } catch (err) {
    console.log("An error has occured:", err);
  }
}
exchangeIpo();
