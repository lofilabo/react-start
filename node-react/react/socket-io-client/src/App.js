import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";
//const ENDPOINT = "http://97.107.135.173:4001";
function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default App;