import React from "react";
import { Table } from "@mantine/core";
import "./WineData.css"; // Import CSS file for styling

const WineData = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Get unique classes from data
  const classes = [...new Set(data.map((entry) => entry.Alcohol))];

  // Calculate statistics for each class
  const statistics = classes.map((alcClass) => {
    const filteredData = data.filter((entry) => entry.Alcohol === alcClass);
    const flavanoids = filteredData.map((entry) => entry.Flavanoids);
    const mean = calculateMean(flavanoids).toFixed(3); // Round mean to 3 decimal places
    const median = calculateMedian(flavanoids).toFixed(3); // Round median to 3 decimal places
    const mode = calculateMode(flavanoids);
    return { Class: alcClass, Mean: mean, Median: median, Mode: mode };
  });

  return (
    <Table className="wine-gamma-table">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Measure</Table.Th>
          {statistics.map((stat) => (
            <Table.Th key={stat.Class}>Class {stat.Class}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Flavanoids Mean</Table.Td>
          {statistics.map((stat) => (
            <Table.Td key={stat.Class}>{stat.Mean}</Table.Td>
          ))}
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Flavanoids Median</Table.Td>
          {statistics.map((stat) => (
            <Table.Td key={stat.Class}>{stat.Median}</Table.Td>
          ))}
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Flavanoids Mode</Table.Td>
          {statistics.map((stat) => (
            <Table.Td key={stat.Class}>{stat.Mode}</Table.Td>
          ))}
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};

// Utility function to calculate mean
const calculateMean = (data) => {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return sum / data.length;
};

// Utility function to calculate median
const calculateMedian = (data) => {
  const sortedData = data.sort((a, b) => a - b);
  const mid = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    return (sortedData[mid - 1] + sortedData[mid]) / 2;
  } else {
    return sortedData[mid];
  }
};

// Utility function to calculate mode
const calculateMode = (data) => {
  const counts = {};
  data.forEach((value) => {
    counts[value] = (counts[value] || 0) + 1;
  });
  let mode = [];
  let maxCount = 0;
  for (const key in counts) {
    if (counts[key] > maxCount) {
      mode = [key];
      maxCount = counts[key];
    } else if (counts[key] === maxCount) {
      mode.push(key);
    }
  }
  return mode.join(", ");
};

export default WineData;
