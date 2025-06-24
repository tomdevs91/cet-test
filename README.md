# CET Test - TypeScript Project

A basic TypeScript project with a simple user management system.

## Features

- TypeScript configuration with strict mode
- Simple User management system
- Build and development scripts
- Clean project structure

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tomdevs91/cet-test.git
   cd cet-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled JavaScript
- `npm run dev` - Run the TypeScript directly with ts-node
- `npm run watch` - Watch for changes and recompile automatically
- `npm run clean` - Remove the dist directory

### Usage

1. **Development mode** (runs TypeScript directly):
   ```bash
   npm run dev
   ```

2. **Production mode** (compile then run):
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
cet-test/
├── src/
│   └── index.ts          # Main application file
├── dist/                 # Compiled JavaScript (generated)
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Development

This project includes a simple UserService class that demonstrates:

- TypeScript interfaces
- Class-based architecture
- Type safety
- Basic CRUD operations

Feel free to extend the functionality or use it as a starting point for your TypeScript projects.

## License

MIT
