import React from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../Context/BookContext";

export default function Search() {
  const { books, addToRead, addToReading, addToWantToRead, addToNone } =
    React.useContext(BookContext);
  const [searchedBooks, setSearchedBooks] = React.useState([]);

  function handleSearch(value) {
    if (value.trim() === "") {
      setSearchedBooks([]);
    } else {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchedBooks(filteredBooks);
    }
  }

  function handleRead(id) {
    addToRead(id);

    setSearchedBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          return { ...book, state: "Read" };
        }
        return book;
      })
    );
  }

  function handleWantToRead(id) {
    addToWantToRead(id);

    setSearchedBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          return { ...book, state: "Want to Read" };
        }
        return book;
      })
    );
  }

  function handleReading(id) {
    addToReading(id);

    setSearchedBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          return { ...book, state: "Reading" };
        }
        return book;
      })
    );
  }

  function handleNone(id) {
    addToNone(id);

    setSearchedBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          return { ...book, state: "" };
        }
        return book;
      })
    );
  }

  return (
    <div>
      <Link to="/">Go back to home page</Link>
      <h1>Search</h1>
      <div>
        <label htmlFor="search">Search books</label>
        <input
          onChange={(event) => handleSearch(event.target.value)}
          type="text"
          id="search"
        />
      </div>
      <div style={{ display: "flex", gap: "120px", flexWrap: "wrap" }}>
        {searchedBooks.map((book) => (
          <div style={{ width: "100px" }} key={book.id}>
            <img src={book.image} style={{ width: "120px" }} alt={book.title} />
            <p>{book.title}</p>
            <button
              disabled={book.state === "Reading"}
              onClick={() => handleReading(book.id)}
            >
              Reading
            </button>
            <button
              disabled={book.state === "Read"}
              onClick={() => handleRead(book.id)}
            >
              Read
            </button>
            <button
              disabled={book.state === "Want to Read"}
              onClick={() => handleWantToRead(book.id)}
            >
              Want to Read
            </button>
            <button onClick={() => handleNone(book.id)}>None</button>
          </div>
        ))}
      </div>
    </div>
  );
}
