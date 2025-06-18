import React from "react";
import "./style.css";
import Comments from "./Comments"

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h1>React Virtualization using react-window</h1>
      <p>Load large data set effectively and smoothly</p>
      <Comments />
    </div>
  );
}
