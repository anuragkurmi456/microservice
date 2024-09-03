# Market Data API

This project provides a RESTful API for accessing various market data endpoints. It's built using Fastify and TypeScript, offering efficient and type-safe data retrieval for financial market information.

## Features

- Fetch scheme NAV (Net Asset Value) data
- Retrieve security prices
- Access security master data
- Get scheme RAPM (Risk-Adjusted Performance Measurement) details
- Fetch corporate action information
- Retrieve holdings data

## API Endpoints

1. `/market-data/schemeNav` - Fetch scheme NAV details
2. `/market-data/schemeMaster` - Fetch scheme master data
3. `/market-data/securityPrices` - Retrieve security prices
4. `/market-data/securityMaster` - Access security master data
5. `/market-data/schemeRapm` - Get scheme RAPM details
6. `/market-data/corporateAction` - Fetch corporate action information
7. `/market-data/holdings` - Retrieve holdings data

All endpoints support pagination and accept the following query parameters:
- `timestamp`: Date and time for data retrieval
- `pageNumber`: Page number for pagination
- `limit`: Number of items per page

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (database connections, etc.)
4. Run the server: `npm start`

## Technologies Used

- Fastify: Fast and low overhead web framework for Node.js
- TypeScript: Typed superset of JavaScript
- SQL Server: Database for storing market data
