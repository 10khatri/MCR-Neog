import React from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../Context/BookContext";
export default function Home() {
  const { books, addToRead, addToReading, addToWantToRead, addToNone } =
    React.useContext(BookContext);
  const currentlyReading = books.filter((book) => book.state === "Reading");
  const wantToRead = books.filter((book) => book.state === "Want to Read");
  const read = books.filter((book) => book.state === "Read");

  function handleRead(id) {
    addToRead(id);
  }

  function handleWantToRead(id) {
    addToWantToRead(id);
  }

  function handleReading(id) {
    addToReading(id);
  }
  function handleNone(id) {
    addToNone(id);
  }

  return (
    <div style={{ overflow: "auto" }}>
      <h1>Home</h1>
      <Link to="/search">Search all books here..</Link>
      <div style={{ borderBottom: "1px solid white" }}>
        <h2>Currently Reading</h2>
        <div style={{ display: "flex", gap: "120px", flexWrap: "wrap" }}>
          {currentlyReading.map((book) => (
            <div style={{ width: "100px" }} key={book.id}>
              <img
                src={book.image}
                style={{ width: "120px" }}
                alt={book.title}
              />
              <p>{book.title}</p>
              <button disabled={book.state === "Reading"}>Reading</button>
              <button onClick={() => handleRead(book.id)}>Read</button>
              <button onClick={() => handleWantToRead(book.id)}>
                Want to Read
              </button>
              <button onClick={() => handleNone(book.id)}>None</button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderBottom: "1px solid white" }}>
        <h2>Want to Read</h2>
        <div style={{ display: "flex", gap: "120px", flexWrap: "wrap" }}>
          {wantToRead.map((book) => (
            <div style={{ width: "100px" }} key={book.id}>
              <img
                src={book.image}
                style={{ width: "120px" }}
                alt={book.title}
              />
              <p>{book.title}</p>
              <button onClick={() => handleReading(book.id)}>Reading</button>
              <button onClick={() => handleRead(book.id)}>Read</button>
              <button disabled={book.state === "Want to Read"}>
                Want to Read
              </button>
              <button onClick={() => handleNone(book.id)}>None</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Read</h2>
        <div style={{ display: "flex", gap: "120px", flexWrap: "wrap" }}>
          {read.map((book) => (
            <div style={{ width: "100px" }} key={book.id}>
              <img
                src={book.image}
                style={{ width: "120px" }}
                alt={book.title}
              />
              <p>{book.title}</p>
              <button onClick={() => handleReading(book.id)}>Reading</button>
              <button disabled={book.state === "Read"}>Read</button>
              <button onClick={() => handleWantToRead(book.id)}>
                Want to Read
              </button>
              <button onClick={() => handleNone(book.id)}>None</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
