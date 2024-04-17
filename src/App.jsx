import React from "react";
import { MantineProvider } from "@mantine/core";
import WineData from "./WineData";
import wineData from "./wineData.json";
import WineGammaData from "./WineGammaData";

const App = () => {
  return (
    <MantineProvider>
      <div>
        <h1>Wine Data Statistics</h1>
        <WineData data={wineData} />
        <br />
        <br />
        <WineGammaData data={wineData} />
      </div>
    </MantineProvider>
  );
};
export default App;
