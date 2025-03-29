import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
        .then((res) => {
            setMessage(res.data.message);
            setStatusMessage('success')
        })
        .catch(() => {
            setMessage("Backend НЕ работает! (´｡• ω •｡`)");
            setStatusMessage('error')
        });
  }, []);

  const getColor = () => {
      switch (statusMessage) {
          case "success":
              return "green";
          case "error":
              return "red";
          default:
              return "black";
      }
  }

  return (
      <div>
        <p style={{ textAlign: "center", padding: "100px", color: "grey" }}>TEST Frontend + Backend + Docker Compose (if app is ok, we'd see "Backend работает! and ʕ ᵔᴥᵔ ʔ")</p>
        <h1 style={{ textAlign: "center", paddingTop: "100px", color: getColor() }}>{message}</h1>
      </div>
  );
}

export default App;