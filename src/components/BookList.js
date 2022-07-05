import React from "react";
import { books } from "./books";

function BookList() {
  return (
    <section id="bookList">
      {books.map((book) => {
        const { img, title, author } = book;
        return (
          <article className="bookCard">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h3>{author.toUpperCase()}</h3>
          </article>
        );
      })}
    </section>
  );
}

export default BookList;
