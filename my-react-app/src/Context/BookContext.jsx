import React from "react";
import { data } from "../Data/data";
export const BookContext = React.createContext();
export default function BookContextProvider({ children }) {
  const [books, setBooks] = React.useState(data);
  function addToRead(id) {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, state: "Read" };
      }
      return book;
    });

    setBooks(updatedBooks);
  }

  function addToWantToRead(id) {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, state: "Want to Read" };
      }
      return book;
    });

    setBooks(updatedBooks);
  }

  function addToReading(id) {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, state: "Reading" };
      }
      return book;
    });

    setBooks(updatedBooks);
  }
  function addToNone(id) {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, state: "" };
      }
      return book;
    });

    setBooks(updatedBooks);
  }
  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        addToRead,
        addToReading,
        addToWantToRead,
        addToNone,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
