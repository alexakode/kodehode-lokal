import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { nb } from "date-fns/locale";
function App() {
  const myName = "Alexander";
  return (
    <div>
      <h1>{myName} er en const i denne filen, App.jsx</h1>
      <p>{format(new Date(), "dd MMMM yyyy", { locale: nb })} kommer fra format i date-fns</p>
      <p>
        {formatDistance(subDays(new Date(), 3), new Date(), { locale: nb })} siden kommer fra
        formatDistance og subDays i date-fns
      </p>
      <p>
        {formatRelative(subDays(new Date(), 3), new Date(), { locale: nb })} siden kommer fra
        formatRelative og subDays i date-fns.
      </p>
      <p>
        Strengene i App.jsx er skrevet på norsk bokmål fordi jeg har importert locale nb fra
        date-fns/locale.
      </p>
      <p>Disse eksporteres som App</p>
    </div>
  );
}
export default App;
