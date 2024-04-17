import React from "react";
import { Table } from "@mantine/core";
import {
  calculateGammaStatistics,
  calculateMean,
  calculateMedian,
  calculateMode,
} from "./utils";
import "./wine-gamma-table.css";

const WineGammaData = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const statistics = calculateGammaStatistics(data);

  // Round off mean, median, and mode to 3 decimal places
  const roundedStatistics = statistics.map((stat) => ({
    ...stat,
    Mean: parseFloat(stat.Mean).toFixed(3),
    Median: parseFloat(stat.Median).toFixed(3),
    Mode: stat.Mode, // Mode may already be rounded or not applicable
  }));

  return (
    <Table className="wine-gamma-table">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Measure</Table.Th>
          {roundedStatistics.map((stat) => (
            <Table.Th key={stat.Class}>Class {stat.Class}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td> Gamma Mean</Table.Td>
          {roundedStatistics.map((stat) => (
            <Table.Td key={stat.Class}>{stat.Mean}</Table.Td>
          ))}
        </Table.Tr>
        <Table.Tr>
          <Table.Td> Gamma Median</Table.Td>
          {roundedStatistics.map((stat) => (
            <Table.Td key={stat.Class}>{stat.Median}</Table.Td>
          ))}
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Gamma Mode</Table.Td>
          {roundedStatistics.map((stat) => (
            <Table.Td key={stat.Class}>{stat.Mode}</Table.Td>
          ))}
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};

export default WineGammaData;
