import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Container from "./components/Container";
import Text from "./components/Text";

function App() {
  const [coins, setCoins] = useState();
  useEffect(() => {
    const client = new W3CWebSocket("wss://api.upbit.com/websocket/v1");
    client.onopen = () => {
      console.log("WebSocket Client Connected");
      client.send(
        JSON.stringify([
          { ticket: "10524154-bf05-4274-8309-1c3f6cf2dee6" },
          { type: "ticker", codes: ["KRW-BTC"] },
        ])
      );
    };
    client.onclose = () => {
      console.log("WebSocket Client Closed");
    };
    client.onmessage = (message) => {
      message.data.text().then((text) => {
        const json = JSON.parse(text);
        console.log(json);
        setCoins(json);
      });
    };
  }, []);
  return (
    <Container>
      {coins && (
        <Container
          width="300px"
          height="300px"
          fd="column"
          backgroundColor="#1A2436"
        >
          <Text>{coins.code}</Text>
          <Text marginTop="10px">최근 거래량: {coins.trade_volume}</Text>
          <Text>최근 거래가: {coins.trade_price}</Text>
          <Text marginTop="10px">고가: {coins.high_price}</Text>
          <Text>저가: {coins.low_price}</Text>
        </Container>
      )}
    </Container>
  );
}

export default App;
