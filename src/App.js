import { useEffect, useState } from "react";
import Container from "./components/Container";
import Text from "./components/Text";

function App() {
  const [coins, setCoins] = useState([]);
  const [candles, setCandles] = useState([]);
  const getCoins = () => {
    fetch("/market/all?isDetails=false", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const KRW = res.filter((item) => item.market.includes("KRW"));
        setCoins(KRW.slice(0, 10));
      });
  };
  const getLastCandle = (market) => {
    return fetch(`/candles/minutes/1?market=${market}&count=1`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCoins();
  }, []);
  useEffect(() => {
    if (coins.length !== 0) {
      const arr = [];
      coins.forEach((coin) => {
        getLastCandle(coin.market).then((res) => {
          if (res[0]) {
            const tmp_coin = {};
            tmp_coin["market"] = res[0].market;
            tmp_coin["candle_time"] = res[0].candle_date_time_kst;
            tmp_coin["candle_acc_price"] = res[0].candle_acc_trade_price;
            tmp_coin["candle_acc_volume"] = res[0].candle_acc_trade_volume;
            tmp_coin["candle_high_price"] = res[0].high_price;
            tmp_coin["candle_low_price"] = res[0].low_price;
            tmp_coin["candle_opening_price"] = res[0].opening_price;
            tmp_coin["candle_closing_price"] = res[0].trade_price;
            arr.push(tmp_coin);
          }
        });
      });
      setCandles(arr);
    }
  }, [coins]);
  return (
    <Container>
      <Container width="1640px" height="1500px" display="block">
        {candles.map((item, index) => (
          <Container
            width="400px"
            height="200px"
            marginRight="10px"
            marginBottom="10px"
            display="inline-flex"
            backgroundColor="#1A2436"
            fd="column"
            key={index}
          >
            <Text fontSize="21px">{item.korean_name}</Text>
            <Text fontSize="21px">시가: {item.candle_opening_price}</Text>
            <Text fontSize="21px">종가: {item.candle_closing_price}</Text>
          </Container>
        ))}
      </Container>
    </Container>
  );
}

export default App;
