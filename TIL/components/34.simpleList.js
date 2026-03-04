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

const names = ["john", "peter", "susan"];

const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

const BookList = () => {
  return <section className="booklist">{newNames}</section>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
