# My Backend Server

This project is a backend server built with Node.js, Express, and GraphQL. It is designed to store and manage movie data retrieved from an external API using MongoDB as the database.

## Project Structure

```
my-backend-server
├── src
│   ├── index.ts          # Entry point of the application
│   ├── schema            # Contains GraphQL schema definitions
│   │   └── movieSchema.ts
│   ├── resolvers         # Contains resolver functions for GraphQL
│   │   └── movieResolver.ts
│   ├── models            # Contains Mongoose models
│   │   └── movieModel.ts
│   └── config            # Contains configuration files
│       └── db.ts
├── package.json          # NPM package configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd my-backend-server
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Configuration

1. Set up your MongoDB connection in `src/config/db.ts`. Ensure you have the correct connection string.

### Running the Server

To start the server, run:

```
npm start
```

The server will be running on `http://localhost:4000`.

### Usage

You can interact with the GraphQL API using tools like Postman or GraphQL Playground. The API allows you to query and mutate movie data.

### License

This project is licensed under the MIT License.