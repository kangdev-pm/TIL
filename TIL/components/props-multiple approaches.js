import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css";

const firstBook = {
  author: "김승호",
  title: "돈의 속성",
  img: "../images/image-1.jpg",
};

const secondBook = {
  author: "김호연",
  title: "불편한 편의점",
  img: "../images/image-2.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

// 방법 1. props로 전달된 객체에서 필요한 값을 추출하여 변수에 할당하는 방법
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

// 방법 2. props로 전달된 객체에서 필요한 값을 바로 구조 분해 할당하는 방법
// const Book = ({ img, title, author }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
