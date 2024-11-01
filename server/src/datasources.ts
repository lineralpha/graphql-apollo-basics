import db from "./_db.js";
import type {
    AddAuthorInput,
    AddBookInput,
    Author,
    Book,
    BooksSearchInput,
    EditAuthorInput,
    EditBookInput
} from "./__generated__/resolver-types";

export class BookDataSource {
    async getBooks(search?: BooksSearchInput | null) {
        let query = db.books;
        if (search) {
            if (search.author) {
                query = query.filter(b =>
                    db.authors
                      .filter(a => a.name.includes(search.author!))
                      .map(a => a.id)
                    .includes(b.author_id))
            }

            if (search.keyWord) {
                query = query.filter(b =>
                    b.title.includes(search.keyWord!) ||
                    b.summary.includes(search.keyWord!));
            }
        }

        return query;
    }

    async getBooksByAuthorId(author_id: string) {
        return db.books.filter(b => b.author_id === author_id);
    }

    async getBook(isbn: string) {
        return db.books.find(book => book.isbn === isbn);
    }

    async addBook(input: AddBookInput) {
        let book = {
            isbn: input.isbn,
            title: input.title,
            author_id: input.author_id,
            summary: input.summary ?? ""
         };

        db.books.push(book);
        console.log("New book added:", book);
        return book;
    }

    async updateBook(isbn: string, edits: EditBookInput) {
        db.books = db.books.map(b => {
            if (b.isbn === isbn) {
                return {
                    ...b,
                    title: edits.title ?? b.title,
                    summary: edits.summary ?? b.summary
                };
            }
            return b;
        });

        // returns the book that was updated
        return this.getBook(isbn);
    }

    async deleteBook(isbn: string) {
        db.books = db.books.filter(b => b.isbn !== isbn);
        return db.books;
    }

    getAuthors() {
        return db.authors;
    }

    getAuthor(id: string) {
        return db.authors.find(a => a.id === id);
    }

    addAuthor(input: AddAuthorInput) {
        let author = {
            name: input.name,
            bio: input.bio ?? "",
            id: Math.floor(Math.random() * 1000).toString()
        };

        db.authors.push(author);
        console.log("New author added:", author);
        return author;
    }

    updateAuthor(id: string, edits: EditAuthorInput) {
        db.authors = db.authors.map(a => {
            if (a.id === id) {
                return {
                    ...a,
                    name: edits.name ?? a.name,
                    bio: edits.bio ?? a.bio
                }
            }
            return a;
        });

        return this.getAuthor(id);
    }

    deleteAuthor(id: string) {
        db.authors = db.authors.filter(a => a.id !== id);
        return db.authors;
    }
}
