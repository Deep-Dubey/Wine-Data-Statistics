# Wine Data Statistics

# Description
This project is a collection of components and utilities for analyzing wine data, including statistical calculations and data visualization.

# Table of Contents
Installation
Usage
Components
Utilities

# Installation
To run this project locally, you'll need to have Node.js and Yarn installed on your machine. Once you have those installed, you can follow these steps:

Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Run yarn install to install the dependencies.

# Usage
To run the project locally, you can use the following Yarn commands:

yarn start: Starts the development server.
yarn build: Builds the project for production.
yarn test: Runs tests.

# Components
WineData
The WineData component displays statistical measures of the Wine Data Set in a tabular format. It calculates class-wise mean, median, and mode of Flavanoids for the entire dataset and displays them in a table using the Mantine library.

WineGammaData
The WineGammaData component calculates the class-wise mean, median, and mode of "Gamma" for the entire dataset, which is calculated as Gamma = (Ash * Hue) / Magnesium. It also displays the results in a tabular format using the Mantine library.

# Utilities
calculateMean
Calculates the mean value of a dataset.

calculateMedian
Calculates the median value of a dataset.

calculateMode
Calculates the mode value of a dataset.

calculateGamma
Calculates the "Gamma" value for a given data point using the formula: Gamma = (Ash * Hue) / Magnesium.

# ScreenShot
![Image of Tables](DataSet.jpeg)


