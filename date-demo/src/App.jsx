import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
function App() {
  const myName = "Alexander";
  return (
    <div>
      <h1>{myName}</h1>
      <p>{format(new Date(), "dd MMMM yyyy")}</p>
      <p>{formatDistance(subDays(new Date(), 3), new Date())} ago</p>
      <p>{formatRelative(subDays(new Date(), 3), new Date())} ago</p>
      <p>Open the console to see date outputs</p>
    </div>
  );
}
export default App;
