import React, { use } from "react";
import Book from "./Book/Book";

const Books = ({ booksData }) => {
  const bookData = use(booksData);
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-7">Books</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          bookData.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>

    </div>
  );
};

export default Books;
