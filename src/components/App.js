import React from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { version, Button } from "antd";
//import "antd/dist/antd.css";
function App() {
  return (
    <div className="App">
    <h1>Please fork this codesandbox to reproduce your issue.</h1>
    <div>Current antd version: {version}</div>
    <div style={{ marginTop: "16px" }}>
      <Button type="primary">Example button</Button>
    </div>
  </div>
  );
}

export default App;
