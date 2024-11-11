import { BookDataSource } from "./dataSources";

export interface MyContext {
    dataSource: {
        booksAPI: BookDataSource
    };
}
