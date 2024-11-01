import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { BookDataSource } from "./datasources.js";
import { resolvers } from "./resolvers.js";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// required for esmodule.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// read schema from the schema file
const typeDefs = fs.readFileSync(path.resolve(__dirname, "./schema.graphql"),"utf-8");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    },
    // We are using a static data set for this example, but normally
    // this would be where you'd add your data source connections,
    // or your REST API classes.
    context: async () => {
        // object that implements MyContext
        return {
            dataSource: {
                booksAPI: new BookDataSource()
            },
        };
    },
});

console.log(`🚀  Server ready at: ${url}`);
