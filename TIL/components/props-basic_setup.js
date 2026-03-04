import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css";

const author = "김승호";
const title = "돈의 속성";
const img = "../images/image-1.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const Image = () => {
  return <img src="../images/image-1.jpg" alt="돈의 속성" />;
};
const Author = () => {
  const inlineHeadingStyle = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyle}>김승호</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
