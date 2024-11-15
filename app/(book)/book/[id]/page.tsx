import { BOOK_LIST_API } from "../../../constant";
import BookList from "../../../../components/booklist";
import styled from "../../../../styles/main.module.css";

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getBookList(id);
  return {
    title: movie.display_name,
  };
}

interface IParams {
  params?: { id: string };
}

async function getBookList(id: string) {
  console.log(`${BOOK_LIST_API}?name=${id}`);
  const res = await fetch(`${BOOK_LIST_API}?name=${id}`);
  const json = await res.json();
  return json.results;
}

export default async function Book({ params: { id } }: IParams) {
  const book = await getBookList(id);
  return (
    <div className={styled.container}>
      {book.books.map((list, key) => (
        <BookList
          img={list.book_image}
          author={list.author}
          url={list.amazon_product_url}
          title={list.title}
          key={key}
        />
      ))}
    </div>
  );
}
