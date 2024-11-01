import { AddAuthorInput, AddBookInput, Book, BooksSearchInput, MutationAddBookArgs, QueryAuthorArgs, QueryBookArgs, QueryBooksArgs, Resolvers } from "./__generated__/resolver-types";
import { BookDataSource } from "./datasources.js";

export interface MyContext {
    dataSource: {
        booksAPI: BookDataSource
    };
}

export const resolvers = {
    Query: {
        async books(_: any, args: QueryBooksArgs, context: MyContext) {
            return await context.dataSource.booksAPI.getBooks(args.search);
        },
        async book(_: any, args: QueryBookArgs, context: MyContext) {
            return await context.dataSource.booksAPI.getBook(args.isbn);
        },
        authors(_: any, __: any, context: MyContext) {
            return context.dataSource.booksAPI.getAuthors();
        },
        author(_: any, args: QueryAuthorArgs, context: MyContext) {
            return context.dataSource.booksAPI.getAuthor(args.id);
        }
    },
    Mutation: {
        async addBook(_: any, args: MutationAddBookArgs, context: MyContext) {
            let newBook = await context.dataSource.booksAPI.addBook(args.book);
            return {
                code: 200,
                success: true,
                message: `New book '${newBook.title}' added.`,
                book: newBook
            }
        }
    },
    Book: {
        author(book: { author_id: string }, _: any, context: MyContext) {
            return context.dataSource.booksAPI.getAuthor(book.author_id);
        }
    },
    Author: {
        books(author: { id: string }, _: any, context: MyContext) {
            return context.dataSource.booksAPI.getBooksByAuthorId(author.id);
        }
    }
};
