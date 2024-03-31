import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";
import Main from "./components/Main";

//no dotenv
const socket = io.connect("http://localhost:5000", { autoConnect: false });
const userId = nanoid(4);

function App() {
  const [chat, setChat] = useState([]);
  const [connectedUsersList, setConnectedUsersList] = useState([]);



  return <Main socket={socket} />;
}

export default App;
