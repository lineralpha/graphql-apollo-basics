export default class db {
    static books = [
        {
            isbn: "978-0134686097",
            title: "Effective Java, 3rd Edition",
            author_id: "1",
            summary: `A book written by the legendary Java architect.
                      All Java developers must read this book.`
        },
        {
            isbn: "978-0321336781",
            title: "Java Puzzlers: Traps, Pitfalls, and Corner Cases",
            author_id: "1",
            summary: `Every programming language has its quirks. This lively book reveals
                      oddities of the Java programming language through entertaining
                      and thought-provoking programming puzzles.`
        },
        {
            isbn: "978-0321349606",
            title: "Java Concurrency in Practice",
            author_id: "1",
            summary: `This book covers a very deep and subtle topic in a very clear and concise way,
                      making it the perfect Java Concurrency reference manual.`
        },
        {
            isbn: "978-1338878929",
            title: "Harry Potter and the Sorcerer's Stone",
            author_id: "2",
            summary: `The first book in the Harry Potter series.`
        },
        {
            isbn: "978-1546171409",
            title: "Harry Potter and the Chamber of Secrets",
            author_id: "2",
            summary: `The second book in the Harry Potter series.`
        },
    ];

    static authors = [
        {
            id: "1",
            name: "Joshua Bloch",
            bio: `Joshua J. Bloch is a software engineer and a technology author,
                  He led the design and implementation of numerous Java platform features,
                  one of which is "the Java Collections Framework". He is the author of
                  the programming guide "Effective Java", and is a co-author of two other Java books,
                  "Java Puzzlers" and "Java Concurrency In Practice".`
        },
        {
            id: "2",
            name: "J.K. Rowling",
            bio: `J.K. Rowling is the author of the enduringly popular, era-defining Harry Potter book series.`
        }
    ];
}
