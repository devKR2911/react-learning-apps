import { useState } from "react";
import { getDailyPerformance } from "../services/alphaVantageService";
import "../App.css";

export default function StockList({ userId }) {
  const [symbol, setSymbol] = useState("");
  const [performance, setPerformance] = useState("");
  const [error, setError] = useState("");

  async function handleStockSubmit(e) {
    e.preventDefault();
    setError("");
    setPerformance("");

    try {
      const performanceData = await getDailyPerformance(symbol);
      if (!performanceData) {
        setError("No data found for the given symbol.");
        return null;
      }
      setPerformance(performanceData);
    } catch {
      setError("Failed to fetch stock data.");
    }
  }

  return (
    <div>
      <form className="stock-form" onSubmit={handleStockSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {performance && (
          <p style={{ color: performance > 0 ? "green" : "red" }}>
            Performance: {performance}%
          </p>
        )}
        <input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="AAPL"
        />
        <button type="submit">Search Stock</button>
      </form>
    </div>
  );
}
