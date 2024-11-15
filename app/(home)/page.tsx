import { BOOK_API } from "../constant";
import Books from "../../components/books";

async function getBookInfo() {
  const res = await fetch(BOOK_API);
  const json = await res.json();
  return json;
}

export default async function Page() {
  const Book = await getBookInfo();
  console.log(Book.results);
  return (
    <div>
      {Book.results.map((book) => (
        <Books id={book.list_name_encoded} title={book.display_name} />
      ))}
    </div>
  );
}
