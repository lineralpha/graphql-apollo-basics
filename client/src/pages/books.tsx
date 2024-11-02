// the gql function does not get syntax highlighting on the graphql query
// use the graphql-tag instead
// import { gql } from "../__generated__/";

import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
  query getBooks($search: BooksSearchInput) {
    books(search: $search) {
      isbn
      title
      price
      author {
        id
        name
        books {
          title
        }
      }
    }
  }
`;

export const Books = () => {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading) {
    console.log("loading ...");
  }
  if (error) {
    console.log("Error:", error.message);
  }

  return JSON.stringify(data);
};
