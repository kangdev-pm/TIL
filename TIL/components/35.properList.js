import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css";

const books = [
  {
    author: "나태주",
    title: "꽃을 보듯 너를 본다",
    img: "https://m.media-amazon.com/images/I/31+NaYSdQGL._SY342_.jpg",
  },
  {
    author: "김호연",
    title: "불편한 편의점",
    img: "https://m.media-amazon.com/images/I/71RHrARlaUL._SY342_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { author, title, img } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
