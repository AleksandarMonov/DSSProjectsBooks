import { useState } from "react";

import Bookshelf from "./bookshelf/Bookshelf";
import NavigationBar from "./navigation/NavigationBar";

import "./App.css";
import BookForm from "./form/BookForm";

const booksData = [
  {
    title: "The Enigmatic Manor",
    author: "Agnes Montgomery",
    isbn: "978-0-06-112008-4",
    price: "9.99",
    publicationDate: new Date("1898-07-11"),
    imgSrc:
      "https://m.media-amazon.com/images/I/61XrwBwT+WL._SY342_.jpg",
  },
  {
    title: "Shadows of the Past",
    author: "Thomas Harrington",
    isbn: "978-0-452-28423-4",
    price: "9.99",
    publicationDate: new Date("1923-06-08"),
    imgSrc:
      "https://m.media-amazon.com/images/I/51SK-UYgcZL._SY445_SX342_.jpg",
  },
  {
    title: "Echoes from the Attic",
    author: "Elizabeth Sinclair",
    isbn: "978-0-316-76948-4",
    price: "20.29",
    publicationDate: new Date("1910-07-16"),
    imgSrc:
      "https://m.media-amazon.com/images/I/41k-rlr6mVL._SY445_SX342_.jpg",
  },
  {
    title: "The Mysterious Locket",
    author: "Margaret Wells",
    isbn: "978-0-14-143951-8",
    price: "7.99",
    publicationDate: new Date("1901-01-28"),
    imgSrc:
      "https://m.media-amazon.com/images/I/51ZTNaeD31L._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    title: "Whispers in the Night",
    author: "Frederick Lawson",
    isbn: "978-0-15-690739-2",
    price: "11.59",
    publicationDate: new Date("1887-05-05"),
    imgSrc:
      "https://m.media-amazon.com/images/I/511GpGK7xXL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    isbn: "978-1-85326-008-7",
    price: "15.99",
    publicationDate: new Date("1851-10-18"),
    imgSrc:
      "https://m.media-amazon.com/images/I/518Q7UWX9LL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    isbn: "978-0-14-143955-6",
    price: "8.99",
    publicationDate: new Date("1847-12-01"),
    imgSrc: "https://m.media-amazon.com/images/I/81GEFNjQjQL._SL1500_.jpg",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    isbn: "978-0-451-52634-2",
    price: "7.99",
    publicationDate: new Date("1945-08-17"),
    imgSrc:
      "https://m.media-amazon.com/images/I/91LUbAcpACL._AC_UF894,1000_QL80_.jpg",
  },
];

function App() {
  const [booksList, setBooksList] = useState(booksData);
  const [currentBookData, setCurrentBookData] = useState(undefined);

  const addBookHandler = function (bookData) {
    setBooksList((previousState) => [...previousState, bookData]);
  };

  const updateBookHandler = function (updatedBookData) {
    const { index } = currentBookData;

    setBooksList((previousState) => {
      const updatedBooksList = [...previousState];
      updatedBooksList[index] = { ...updatedBookData };
      return updatedBooksList;
    });

    setCurrentBookData(undefined);
  };

  return (
    <div className="wrapper">
      <NavigationBar />
      <main className="main">
        <Bookshelf
          booksData={booksList}
          onSetBooksList={setBooksList}
          currentBookData={currentBookData}
          onSetCurrentData={setCurrentBookData}
        />
        <BookForm
          booksData={booksList}
          onAddBook={addBookHandler}
          onUpdateBook={updateBookHandler}
          currentBookData={currentBookData}
        />
      </main>
      <footer>DSSProject - Alexandar   Monov 2024</footer>
    </div>
  );
}

export default App;
