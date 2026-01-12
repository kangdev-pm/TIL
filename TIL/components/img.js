import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188331796.jpg"
    alt="돈의 속성"
  />
);
const Title = () => <h2>돈의 속성</h2>;
const Author = () => {
  return <h4>김승호</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
