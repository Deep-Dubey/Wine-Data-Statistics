export const calculateMean = (data) => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  };
  
  export const calculateMedian = (data) => {
    const sortedData = data.sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid];
    }
  };
  
  export const calculateMode = (data) => {
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
    // Round mode to 3 decimal places
    mode = mode.map((value) => parseFloat(value).toFixed(3));
    return mode.join(", ");
  };
  
  export const calculateGamma = (point) => {
    const { Ash, Hue, Magnesium } = point;
    return (Ash * Hue) / Magnesium;
  };
  
  export const calculateGammaStatistics = (data) => {
    const gammaValues = data.map(calculateGamma);
    const classes = [...new Set(data.map((entry) => entry.Alcohol))];
    const statistics = classes.map((alcClass) => {
      const filteredData = data.filter((entry) => entry.Alcohol === alcClass);
      const gammas = filteredData.map(calculateGamma);
      const mean = calculateMean(gammas);
      const median = calculateMedian(gammas);
      const mode = calculateMode(gammas);
      return {
        Class: alcClass,
        Gamma: calculateMean(gammas),
        Mean: mean,
        Median: median,
        Mode: mode,
      };
    });
    return statistics;
  };
  